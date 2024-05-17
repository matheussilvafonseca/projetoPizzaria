import { Request, Response } from "express";
import { ListOrderClosedService } from "../../Services/order/ListOrderClosedService";


class ListOrderClosedController{
    async handle( req: Request, res: Response){

        const date = req.query.date as string;

        const listOrderClosedService = new ListOrderClosedService();

        const orderClosed = await listOrderClosedService.execute({date});

        return res.json(orderClosed);
    }
}

export{ListOrderClosedController}