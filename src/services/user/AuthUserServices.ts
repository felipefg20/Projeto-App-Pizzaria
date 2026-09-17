import prismaClient from '../../prisma/index';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface CreateAuthProps{

    email: string,
    password: string,

}


class authUserServices{

    async execute({email, password}:CreateAuthProps){

        const user = await prismaClient.user.findFirst({

            where:{
                email: email,
            }

        })

        if(!user){
            throw new Error("Email/Senha obrigatório")
        }

        const matchPassword = await compare(password, user.password)

        if(!matchPassword){
            throw new Error("Email/Senha obrigatório")
        }

        const token = sign({
            name: user.name,
            email: user.email,
        }, process.env.JWT_SECRET as string, {
            
            subject: user.id,
            expiresIn: "30d"
        })

        return {
            id: user.id,
            name: user.name,
            token: token,
            email: user.email,
            role: user.role,

        }

    }

}

export {authUserServices}