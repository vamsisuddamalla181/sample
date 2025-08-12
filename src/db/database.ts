import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const url=process.env.mongo_url
if(!url){
    throw new Error("can not find the url")
}
const mongo=mongoose.connect(url)

export default mongo;
