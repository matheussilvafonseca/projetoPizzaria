import prismaClient from "../../prisma";

interface OrderRequest{
    id_produto: string;
}

class DeleteProductService{

    async execute({id_produto}: OrderRequest){

        const order = await prismaClient.produto.delete({
            where:{
                id: id_produto
            }
        })
        return order;
    }
}
export {DeleteProductService}