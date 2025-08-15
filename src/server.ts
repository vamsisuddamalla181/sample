import express from "express";
import type{ Request,Response} from "express";

import {mongo} from "./config/db/mongodb"
import dotenv from "dotenv"
import cors from "cors"
import { swaggerUi, swaggerSpec } from "./docs/swagger";
import userroute from "./modules/user/userRoutes";
import taskroute from "./modules/tasks/taskRoutes";
dotenv.config()
const app=express()

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", taskroute);
app.use("/", userroute);
app.use(express.json())
let PORT=8000
app.use(cors())
mongo()
app.get("/sample",(req:Request,res:Response)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
     console.log("Swagger docs at http://localhost:8000/api-docs");
})

app.use("/user",userroute)
app.use("/task",taskroute)
