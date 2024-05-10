import { Request, Response } from "express";
import { RemoveItemService } from "../../Services/order/RemoveItemService";

class RemoveItemController {
    async handle (req: Request, res: Response){
        const {id_Pedido, id_Item} = req.body;

        const removeItemService = new RemoveItemService();

        const dados = await removeItemService.execute({id_Pedido, id_Item})

        return res.json(dados);
    }
}
export {RemoveItemController}