import express from "express"
const route=express.Router()
import taskcontroler from "../controller/taskcontroler.ts"
import usercontrollers from "../controller/usercontrollers.ts"
route.post("/post",usercontrollers.createUser)
route.get("/getall",usercontrollers.getAllUsers)
route.post("/posttask",taskcontroler.createtask)
route.post("/assign/:userId",taskcontroler.assignTask)
route.get("/user/:userId",taskcontroler.getTasksForUser)
export default route;