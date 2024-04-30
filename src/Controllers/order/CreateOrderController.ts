import { Request, Response } from "express";
import { CreateOrderService } from "../../Services/order/CreateOrderService";

class CreateOrderController{

    async handle(req: Request, res: Response){

        const {mesa, nome} = await req.body;

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({mesa, nome});

        return res.json(order);

    }

}
export {CreateOrderController}