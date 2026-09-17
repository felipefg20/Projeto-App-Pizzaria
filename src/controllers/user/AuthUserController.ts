import { Request, Response } from "express"
import { authUserServices } from "../../services/user/AuthUserServices"


class authUserController{

    async handle(req:Request, res:Response){

        const {email, password} = req.body

        const AuthUserServices = new authUserServices()
        const session = await AuthUserServices.execute({email, password})

        return res.json(session)
    }


}

export {authUserController};