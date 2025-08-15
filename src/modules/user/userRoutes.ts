import express from "express"
const userroute=express.Router()
import { UserController } from "./userControllers.ts"
import { container } from "tsyringe"
const usercontroller=container.resolve(UserController)
userroute.post("/userdetails",usercontroller.createUser.bind(usercontroller))
userroute.get("/getall/users", usercontroller.getAllUsers.bind(usercontroller));
userroute.get("/getbyid/user/:userId", usercontroller.getById.bind(usercontroller));
userroute.post("update/user/:userId", usercontroller.getByIdAndUpdate.bind(usercontroller));


export default userroute