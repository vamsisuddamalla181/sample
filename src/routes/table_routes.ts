import express from "express"
const route=express.Router()
import { TaskController } from "../controller/taskcontroler.ts"
import { UserController } from "../controller/usercontrollers.ts"
import { container } from "tsyringe"
const controller=container.resolve(UserController)
const taskcontroller=container.resolve(TaskController)
route.post("/post",controller.createUser)
route.get("/getall",controller.getAllUsers)
route.get("/getbyid/:userID",controller.getById)
route.post("/update/:userId",controller.getByIdAndUpdate)
route.post("/posttask",taskcontroller.createTask)
route.post("/assign/:userId",taskcontroller.assignTask)
route.get("/user/:userId",taskcontroller.getTasksForUser)
route.post("/taskuser/:userId",taskcontroller.assignUnassignedTasks)
export default route
