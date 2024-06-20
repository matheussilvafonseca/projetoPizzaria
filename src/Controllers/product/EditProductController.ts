import { Request, Response } from "express";
import { EditProductService } from "../../Services/product/EditProductService";

class EditProductController{
    async handle(req: Request, res: Response){
        
        const id_produto = req.query.id_produto as string;
        const nome_produto = req.query.nome_produto as string;
        const preco_produto = req.query.preco_produto as string;
        const descricao_produto = req.query.descricao_produto as string;
        const preco_promocional = req.query.preco_promocional as string;
        const id_categoria = req.query.id_categoria as string;
        // nome_produto as string; preco_produto as string; descricao_produto as string; preco_promocional as string; id_categoria as string;
        const editProductService = new EditProductService();

        const produto = await editProductService.execute({id_produto, nome_produto, preco_produto, descricao_produto, preco_promocional, id_categoria});

        return res.json(produto);
    }
}
export{EditProductController}