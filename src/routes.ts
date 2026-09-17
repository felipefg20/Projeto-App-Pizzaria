import { Router } from "express";
import { createUsercontroller } from "./controllers/user/CreateUserController";
import { validateSchema } from "./middlewares/validateSchema";
import { createAuthSchema, createUserSchema } from "./schemas/userSchema";
import { authUserController } from "./controllers/user/AuthUserController";

const router = Router()

router.post('/users', validateSchema(createUserSchema) ,new createUsercontroller().handle)

router.post('/session', validateSchema(createAuthSchema) ,new authUserController().handle)

export {router};