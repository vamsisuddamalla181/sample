import { model, Document, Schema, Types } from "mongoose";

export type status ="todo"| "assigned" | "inprogress" | "completed";
export interface taskdata extends Document {
  title: string;
  description: string;
  status: status;
  assigned?: Types.ObjectId | null;
}
const tasktable = new Schema<taskdata>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["todo","assigned", "inprogress", "completed"], default: "assigned" },
  assigned: { type: Schema.Types.ObjectId, ref: "User", default: null }
});

const Task = model<taskdata>("Task",tasktable);
export default Task