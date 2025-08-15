import { Document } from "mongoose";
export interface userdata extends Document {
    username: string;
    email: string;
    phone: String;
    fullname: String;
    password: String;
    role: String;
}
declare const User: import("mongoose").Model<userdata, {}, {}, {}, Document<unknown, {}, userdata, {}, {}> & userdata & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default User;
