import prismaClient from "../../prisma";

class ListOrderOpenService{
    async execute(){

        const order = await prismaClient.pedido.findMany({
            where:{
                status: false,
            }
        })
        return order;

    }
}
export {ListOrderOpenService}