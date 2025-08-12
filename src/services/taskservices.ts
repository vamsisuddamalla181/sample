import usertable from "../models/user.ts";
import Task, {type taskdata } from "../models/task.ts";

const taskservice = {
  async assigntask(userId: string, data: Partial<taskdata>) {
    const find = await usertable.findById(userId);
    if (!find) {
      throw new Error("User not found");
    }
    const newTask = new Task({
      title: data.title,
      description: data.description,
      status: data.status || "assigned",
      assigned: userId
    });
    return newTask.save();
  },

  async newtaskforuser(userId: string) {
    return Task.find({ assigned: userId }).populate("assigned");
  },
};

export default taskservice;
