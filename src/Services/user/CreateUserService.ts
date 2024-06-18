import { PrismaClient } from "@prisma/client"
import prismaClient from "../../prisma"

import { hash } from 'bcryptjs'

interface UserRequest {
    nome: string,
    email: string,
    senha: string
}

class CreateUserService {

    async execute({nome, email, senha}: UserRequest) {

        // Verifica se foi enviado o valor do email
        if(!email) {
            return("E-mail não enviado!")
        }

        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where: {
                email: email
            }
        })

        if(UserAlreadyExists) {
            return("E-mail já cadastrado!")
        }

        const senhaHash = await hash(senha, 8)

        const user = await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaHash
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })

        return {ok:true}
    }

}

export {CreateUserService}