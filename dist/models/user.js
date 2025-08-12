// import {model,Schema,Document} from "mongoose"
// export interface userdata extends Document{
//     username:String,
//     email:String
// }
// const usertable=new Schema({
//     username:{type:String,minLength:5,required:true},
//     email:{type:String,match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],required:true}
// })
// export default usertable;
// models/user.ts
import { Schema, model, Document } from "mongoose";
const userSchema = new Schema({
    username: { type: String, minLength: 5, required: true },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
        required: true,
    },
});
const User = model("User", userSchema);
export default User;
//# sourceMappingURL=user.js.map