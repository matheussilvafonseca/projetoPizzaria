import { Request, Response } from "express"
import { CreateProductService } from "../../Services/product/CreateProductService";

class CreateProductController{

    async handle(req: Request, res: Response){
        const {nome, preco, descricao, id_categoria, preco_promocional}= req.body;

        const createProductService = new CreateProductService();

        // if(!req.file){
        //     throw new Error("Erro no Upload da imagem!")
        // }
        // else{
        //     const {originalname, filename: banner} = req.file;

            const product = await createProductService.execute({
                nome,
                preco, 
                descricao,
                preco_promocional,
                id_categoria,
            })
            return res.json(product);
        }
    }

// }
export{CreateProductController}