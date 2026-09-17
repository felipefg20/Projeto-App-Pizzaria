import prismaClient from "../prisma"

interface CreateCategoryProps{

    name: string
}

class createCategoryServices{

    async execute({name}:CreateCategoryProps){

        try{

            const category = await prismaClient.user.findFirst({
                where:{
                    name: name,
                },
                select:{
                    id: true,
                    name:true,
                    createdAt:true
                }
            })
            return category
        }catch{
            throw new Error("Error")
        }
    }

}

export {createCategoryServices}