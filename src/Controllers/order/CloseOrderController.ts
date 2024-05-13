import { Response, Request } from "express";
import { CloseOrderService } from "../../Services/order/CloseOrderService";

class CloseOrderController{
    async handle(req: Request, res: Response){

        const id_pedido = req.body;

        const closeOrder = new CloseOrderService();

        const order = await closeOrder.execute(id_pedido)

        return res.json(order);
    }
}
export {CloseOrderController}