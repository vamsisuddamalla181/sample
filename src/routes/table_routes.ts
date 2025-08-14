import express from "express"
const route=express.Router()
import { TaskController } from "../controller/taskcontroller.ts"
import { UserController } from "../controller/usercontrollers.ts"
import { container } from "tsyringe"
const controller=container.resolve(UserController)
const taskcontroller=container.resolve(TaskController)
route.post("/post",controller.createUser.bind(controller))
route.get("/getall", controller.getAllUsers.bind(controller));
route.get("/getbyid/:userId", controller.getById.bind(controller));
route.post("/update/:userId", controller.getByIdAndUpdate.bind(controller));


route.post("/posttask",taskcontroller.createTask.bind(taskcontroller));
route.post("/assign/:userId",taskcontroller.createTask.bind(taskcontroller));
route.get("/user/:userId",taskcontroller.getTasksForUser.bind(taskcontroller));
route.post("/taskuser/:userId",taskcontroller.assignUnassignedTasks.bind(taskcontroller));
export default route
