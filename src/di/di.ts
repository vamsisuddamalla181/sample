import { container } from "tsyringe";
import { UserController } from "../controller/usercontrollers.ts";
import { UserRepository } from "../repository/userrepository.ts";
import { TaskController } from "../controller/taskcontroler.ts";
import { taskRepository } from "../repository/taskrepository.ts";
container.register(UserRepository,{useClass:UserRepository})
container.register(UserController,{useClass:UserController})
container.register(taskRepository,{useClass:taskRepository})
container.register(TaskController,{useClass:TaskController})