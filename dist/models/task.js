import { model, Document, Schema, Types } from "mongoose";
const tasktable = new Schema({
    title: { type: String, required: true },
    description: { type: String, minLength: 10, required: true },
    status: { type: String, enum: ["assigned", "inprogress", "completed"], required: true },
    assigned: { type: Schema.Types.ObjectId, ref: "usertable", default: null }
});
const Task = model("Task", tasktable);
export default Task;
//# sourceMappingURL=task.js.map