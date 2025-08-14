import express from "express";
import type{ Request,Response} from "express";
import route from "./routes/table_routes.ts";
import {mongo} from "../src/db/mongodb.ts"
import dotenv from "dotenv"
import cors from "cors"
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

app.use("/main",route)
