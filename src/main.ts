import express from "express";
import mongo from "./db/database.js";
const app=express()
app.use(express.json())
let PORT=5000
mongo.then(()=>{
    console.log("server is conneted to the database")
})
.catch((error)=>{
    console.log("server is not connected")
})
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
