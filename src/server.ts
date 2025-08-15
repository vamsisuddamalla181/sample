import express from "express";
import type{ Request,Response} from "express";

import {mongo} from "./config/db/mongodb.ts"
import dotenv from "dotenv"
import cors from "cors"

import userroute from "./modules/user/userRoutes.ts";
import taskroute from "./modules/tasks/taskRoutes.ts";
dotenv.config()
const app=express()
app.use(express.json())
let PORT=3000
app.use(cors())
mongo()
app.get("/sample",(req:Request,res:Response)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})

app.use("/user",userroute)
app.use("/task",taskroute)
