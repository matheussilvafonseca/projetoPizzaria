import { Request, Response } from "express";
import { FinishOrderService } from "../../Services/order/FinishOrderService";

class FinishOrderController{
    async handle(req: Request, res: Response){
        const id_pedido = req.body.id_pedido;

        const finishOrderService = new FinishOrderService();

        const order = await finishOrderService.execute(id_pedido);
        
        return res.json(order);
    }
}
export{FinishOrderController}