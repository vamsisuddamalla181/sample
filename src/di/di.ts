import { container } from "tsyringe";
import { UserController } from "../controller/usercontrollers.ts";
import { userrepository } from "../repository/userrepository.ts";
container.register(userrepository,{useClass:userrepository})
container.register(UserController,{useClass:UserController})
