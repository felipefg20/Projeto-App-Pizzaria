import { hash } from 'bcryptjs'
import prismaClient from '../../prisma/index';


interface CreateUserProps {

    name: string,
    email: string,
    password: string

}


class createUserServices{

    async execute({name, email, password}:CreateUserProps){

        const ifFindUser = await prismaClient.user.findFirst({

            where:{
                email: email
            }
        })

        if(ifFindUser){

            throw new Error("Email já cadastrado")
        }   
        
        const user = await prismaClient.user.create({

            data:{
                name: name,
                email: email,
                password: await hash(password, 8)
            }

        })

        return user

    }


}

export {createUserServices}