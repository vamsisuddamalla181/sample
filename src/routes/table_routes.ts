import express from "express"
const route=express.Router()
import taskcontroler from "../controller/taskcontroler.ts"
import { UserController } from "../controller/usercontrollers.ts"
import { container } from "tsyringe"
const controller=container.resolve(UserController)
route.post("/post",controller.createUser)
route.get("/getall",controller.getAllUsers)
route.get("/getbyid/:userID",controller.getById)
route.post("/update/:userId",controller.getByIdAndUpdate)
route.post("/posttask",taskcontroler.createtask)
route.post("/assign/:userId",taskcontroler.assignTask)
route.get("/user/:userId",taskcontroler.getTasksForUser)
route.post("/taskuser/:userId",taskcontroler.assignTaskforUser)
export default route
