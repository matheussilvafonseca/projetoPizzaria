import prismaClient from "../../prisma";

interface OrderRequest{
    id_produto: string,
    nome_produto: string,
    preco_produto: string,
    descricao_produto: string,
    preco_promocional: string,
    id_categoria: string
}

class EditProductService{
    async execute({id_produto, nome_produto, preco_produto, descricao_produto, preco_promocional, id_categoria}: OrderRequest){

        
        const produto = await prismaClient.produto.update({
            where:{
                id: id_produto
            },
            data: {
                nome: nome_produto,
                preco: preco_produto,
                descricao: descricao_produto,
                preco_promocional: preco_promocional,
                id_categoria: id_categoria
            }
        })

        return console.log(id_produto,nome_produto,preco_produto,descricao_produto,preco_promocional,id_categoria);;
    }
}

export {EditProductService}
