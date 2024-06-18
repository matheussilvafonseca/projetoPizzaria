import prismaClient from "../../prisma";

class ListProductService{
    async execute(){
        const product = await prismaClient.produto.findMany({
            select:{
                id: true,
                nome: true,
                preco: true,
                descricao: true,
                preco_promocional: true,
                categoria:{
                    select:{
                        nome: true
                    }
                }
            }
        })
        return product;
    }
}
export{ListProductService}