import express from "express"
const route=express.Router()
import taskcontroler from "../controller/taskcontroler.ts"
import { UserController } from "../controller/usercontrollers.ts"
import { container } from "tsyringe"
const controller=container.resolve(UserController)
route.post("/post",controller.createUser.bind(controller))
route.get("/getall", controller.getAllUsers.bind(controller));
route.get("/getbyid/:userID", controller.getById.bind(controller));
route.post("/update/:userId", controller.getById.bind(controller));
route.post("/posttask",taskcontroler.createtask)
route.post("/assign/:userId",taskcontroler.assignTask)
route.get("/user/:userId",taskcontroler.getTasksForUser)
route.post("/taskuser/:userId",taskcontroler.assignTaskforUser)
export default route
