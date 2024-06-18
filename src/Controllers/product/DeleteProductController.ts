import { Request, Response } from "express";
import { DeleteProductService } from "../../Services/product/DeleteProductService";

class DeleteProductController{

    async handle(req: Request, res: Response){
        const id_produto = req.query.id_produto as string;

        const deleteProductService = new DeleteProductService();
    
        const order = await deleteProductService.execute({id_produto});

        return res.json(order);
    }

}

export {DeleteProductController}