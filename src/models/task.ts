import { Mongoose,model,Document,Schema } from "mongoose";
export type tasks="assigned"|"inprogess"|"completed"
export interface taskdata extends Document{
    title:String,
    description:String,
    status:tasks
}
const tasks=new Schema<taskdata>({
    title:{type:String},
    description:{type:String,minLength:10},
    status:{type:String,enum:["assigned","inprogess","completed"]}
})
export const task=model<taskdata>("task",tasks)