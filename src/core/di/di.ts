import { container } from "tsyringe";
import { UserController } from "../../modules/user/userControllers.ts";
import { UserRepository } from "../../modules/user/userRepository.ts";
import { TaskController } from "../../modules/tasks/taskController.ts";
import { taskRepository } from "../../modules/tasks/taskRepository.ts";
container.register(UserRepository,{useClass:UserRepository})
container.register(UserController,{useClass:UserController})
container.register(taskRepository,{useClass:taskRepository})
container.register(TaskController,{useClass:TaskController})