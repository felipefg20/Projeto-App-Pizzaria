import { Request, Response } from "express"
import { createUserServices } from "../../services/user/CreateUserServices"



class createUsercontroller{

    async handle(req:Request, res:Response){

        const {name, email, password} = req.body

        const CreateUserServices = new createUserServices()
        const user = await CreateUserServices.execute({

            name: name,
            email: email,
            password: password
        })

        return res.json(user)
    }


}

export {createUsercontroller}