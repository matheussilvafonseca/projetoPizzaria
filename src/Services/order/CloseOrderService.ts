import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido: string;
}

class CloseOrderService{
    async execute({id_pedido}: OrderRequest){
        const dataAtual = new Date;

        
        const order = await prismaClient.pedido.update({
            where:{
                id: id_pedido,
            },
            data:{
                status: true,
                atualizado_em: dataAtual
            }
        })
        return order;
    }
}

export {CloseOrderService}