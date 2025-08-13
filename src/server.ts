import express from "express";
import type{ Request,Response} from "express";
import route from "./routes/table_routes.ts";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()
const app=express()
app.use(express.json())
let PORT=3000
app.use(cors())
const url=process.env.mongo_url
if(!url){
    throw new Error("can not find the url")
}
mongoose.connect(url)
.then(()=>{
    console.log("db is conneted to the database")
})
.catch((error)=>{
    console.log("db is not connected"+error)
})
app.get("/sample",(req:Request,res:Response)=>{
    res.send("hello world")
})
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})

app.use("/main",route)
