import {model,Schema,Document} from "mongoose"
export interface userdata extends Document{
    username:String,
    email:String
}
const user=new Schema({
    username:{type:String,minLength:5,required:true},
    email:{type:String,match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],required:true}
})
