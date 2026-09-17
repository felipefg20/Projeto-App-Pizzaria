import { Request, Response } from "express"
import { createCategoryServices } from "./CreateCategoryServices"


class categorycontroller{
    async handle(req:Request, res:Response){

    const {name} = req.body
    const CreateCategoryServices = new createCategoryServices()
    const category = await CreateCategoryServices.execute({name: name})

    return res.json(category)

    }

}

export {categorycontroller};