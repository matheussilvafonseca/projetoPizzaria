import { Request, Response } from "express";
import { SendOrderService } from "../../Controllers/order/SendOrderService";

class SendOrderController{
    async handle(req: Request, res: Response){
        const {order_id} = req.body;

        const sendOrderService = new SendOrderService();

        const orderRascunho = await sendOrderService.execute({order_id});

        return res.json(orderRascunho);
    }
}
export{SendOrderController}