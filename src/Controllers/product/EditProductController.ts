import { Request, Response } from "express";
import { EditProductService } from "../../Services/product/EditProductService";

class EditProductController{
    async handle(req: Request, res: Response){
        const {id_produto, nome_produto, preco_produto, descricao_produto, preco_promocional, id_categoria} = req.body;

        const editProductService = new EditProductService();

        const produto = await editProductService.execute({id_produto, nome_produto, preco_produto, descricao_produto, preco_promocional, id_categoria});

        return res.json(produto);
    }
}
export{EditProductController}