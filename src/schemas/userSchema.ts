import {z} from "zod";

const createUserSchema = z.object({
    body: z.object({

        name: z.string().min(3, {message:"O nome deve conter no minímo 3 letras"}),
        email: z.email({message:"O email deve ser um válido"}),
        password: z.string().min(6, {message:"A senha deve conter no minímo 6 letras"})
    })


})

export {createUserSchema};


const createAuthSchema = z.object({

    body: z.object({

        email: z.string({message: "O email deve ser valido"}),
        password: z.string({message: "A senha deve ser valida"}),

    })

})

export {createAuthSchema};