import prismaClient from "../../prisma";

interface ProductRequest{
    nome: string;
    preco: string;
    descricao: string;
    preco_promocional: string;
    id_categoria: string;
}

class CreateProductService{

    async execute({nome, preco, descricao, preco_promocional, id_categoria}: ProductRequest){
        const product = await prismaClient.produto.create({
            data:{
                nome: nome,
                preco: preco,
                descricao: descricao,
                preco_promocional: preco_promocional,
                id_categoria: id_categoria,
            }
        })
        return product;
    }

}

export {CreateProductService}