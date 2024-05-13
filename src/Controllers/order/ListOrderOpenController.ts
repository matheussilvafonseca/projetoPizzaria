import { ListOrderOpenService } from "../../Services/order/ListOrderOpenService";
import { Request, Response } from "express";

class ListOrderOpenController{
    async handle(req:Request, res: Response){

        const listByOrder = new ListOrderOpenService();

        const order = await listByOrder.execute();

        return res.json(order);
    }
}

export {ListOrderOpenController}