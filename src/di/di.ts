import { container } from "tsyringe";
import { UserController } from "../controller/usercontrollers.ts";
import { UserRepository } from "../repository/userrepository.ts";

container.register(UserRepository, { useClass: UserRepository });
container.register(UserController, { useClass: UserController });
