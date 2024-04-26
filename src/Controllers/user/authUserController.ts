import {Request, Response} from 'express'
import { AuthUserService } from '../../Services/user/authUser/authUserService'

class AuthUserController {

    async handle(req: Request, res: Response) {
        const {email, senha} = req.body

        const authUserService = new AuthUserService()

        const auth = await authUserService.execute({
            email,
            senha
        })

        return res.json(auth)
    }
}

export {AuthUserController}