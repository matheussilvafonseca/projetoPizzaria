import { Request, Response } from "express";
import { ListProductService } from "../../Services/product/ListProductService";

class ListProductController{
    async handle(req: Request, res: Response){

        const listProduct = new ListProductService();

        const product = await listProduct.execute();

        return res.json(product);
    }
}
export {ListProductController}