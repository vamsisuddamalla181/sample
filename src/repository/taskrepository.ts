import Task, { type taskdata } from "../models/task.js";
import usertable from "../models/user.js";

export class taskRepository {
  async createTask(data: Partial<taskdata>) {
    const newTask = new Task(data);
    return await newTask.save();
  }

  async findUserById(userId: string) {
    return await usertable.findById(userId);
  }

  async assignUnassignedTasks(userId: string) {
    return await Task.updateMany(
      { assigned: null },
      { $set: { assigned: userId } }
    );
  }

  async getTasksForUser(userId: string) {
    return await Task.find({ assigned: userId }).populate("assigned");
  }
};

