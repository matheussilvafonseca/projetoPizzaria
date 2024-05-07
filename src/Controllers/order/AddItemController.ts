import { Request, Response } from "express";
import { AddItemService } from "../../Services/order/AddItemService";

class AddItemController{

async handle(req: Request, res: Response){
    const {quantidade, id_pedido, id_produto} = req.body;

    const addItemService = new AddItemService();

    const item = await addItemService.execute({quantidade, id_pedido, id_produto})

    return res.json(item);
}

}
export{AddItemController}