import Task, { type taskdata } from "./task";
import User from "../user/user";
const taskservice = {

  async assigntask(userId: string, data: Partial<taskdata>) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    const newTask = new Task({
      title: data.title,
      description: data.description,
      status: data.status || "assigned",
      assigned: userId,
    });

    return newTask.save();
  },

  async assignTaskforUser(userId: string) {
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    await Task.updateMany({ assigned: null }, { $set: { assigned: userId } });
  },

  async newtaskforuser(userId: string) {
    return Task.find({ assigned: userId }).populate("assigned");
  },
};

export default taskservice;
