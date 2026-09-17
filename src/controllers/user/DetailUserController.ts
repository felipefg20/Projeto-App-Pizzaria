import { Request, Response } from "express";
import { detailUserServices } from "../../services/user/DetailUserServices";

class detailUsercontroller{

    async handle(req:Request, res:Response){

        const user_id = req.body
        
        const DetailUserServices = new detailUserServices()
        const user = await DetailUserServices.execute(user_id)

        return res.json(user)
    }

}

export {detailUsercontroller};