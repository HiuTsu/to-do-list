import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express'
import { EJSON, ObjectId } from 'bson'
import { UserService } from '../services/UserService'


const userService = new UserService()

class UserController {
    async handle(req: Request, res: Response) {
        const props = req.body
        const newUser = await userService.create(props)


        return res.status(201).json(newUser)
    }

    async login(req: Request, res: Response) {
        const props = req.body
        
        const userFound = await userService.login(props)

     
        return res.status(200).json(userFound)

    }

    async deleteUser(req: Request, res: Response){
        const props = req.body

        const userDeleted = await userService.deleteUser(props)

        return res.status(200).json({message: "Usuário deletado com sucesso"})
    }
}

export { UserController }