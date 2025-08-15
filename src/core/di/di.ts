import { container } from "tsyringe";
import { UserController } from "../../modules/user/userControllers";
import { UserRepository } from "../../modules/user/userRepository";
import { TaskController } from "../../modules/tasks/taskController";
import { taskRepository } from "../../modules/tasks/taskRepository";
container.register(UserRepository,{useClass:UserRepository})
container.register(UserController,{useClass:UserController})
container.register(taskRepository,{useClass:taskRepository})
container.register(TaskController,{useClass:TaskController})