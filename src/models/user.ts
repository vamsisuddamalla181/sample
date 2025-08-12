import { Schema, model, Document } from "mongoose";
export interface userdata extends Document {
  username: string;
  email: string;
}
const userSchema = new Schema<userdata>({
  username: { type: String, minLength: 5, required: true },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    required: true,
  },
});

const User = model<userdata>("User", userSchema);
export default User;

