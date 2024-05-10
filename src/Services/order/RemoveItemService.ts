import prismaClient from "../../prisma";

interface ItemRequest {
  id_Item: string;
  id_Pedido: string;
}

class RemoveItemService {
  async execute({id_Pedido, id_Item }: ItemRequest) {
    const pedido = await prismaClient.pedido.findUnique({
      where: {
        id: id_Pedido,
      },
      select: {
        rascunho: true,
      },
    });

    if (!pedido || !pedido.rascunho) {
      throw new Error('O pedido não pode ser removido, pois não está mais em rascunho.');
    }

    const item = await prismaClient.item.findUnique({
      where: {
        id: id_Item,
        id_pedido : id_Pedido,
      },
    });

    if (!item) {
      throw new Error('Item não encontrado no pedido.');
    }
    await prismaClient.item.delete({
      where: {
        id: id_Item,
      },
    });

    return item;
  }
}

export { RemoveItemService };
