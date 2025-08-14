import { Schema, model, Document } from "mongoose";
export interface userdata extends Document {
  username: string;
  email: string;
  phone:String;
  fullname:String;
  password:String
}
const userSchema = new Schema<userdata>({
  username: { type: String, minLength: 5, required: true },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    required: true,unique:true
  },
  phone:{type:String,match:[/^\+91\d{10}$/,"please enter +91 before entering your number"],required:true},
  fullname:{type:String,minlength:5,maxlength:30,required:true},
  password:{type:String,required:true}
});

const User = model<userdata>("User", userSchema);
export default User;

