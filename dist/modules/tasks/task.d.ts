import { Document, Types } from "mongoose";
export type status = "todo" | "assigned" | "inprogress" | "completed";
export interface taskdata extends Document {
    title: string;
    description: string;
    status: status;
    assigned?: Types.ObjectId | null;
}
declare const Task: import("mongoose").Model<taskdata, {}, {}, {}, Document<unknown, {}, taskdata, {}, {}> & taskdata & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Task;
