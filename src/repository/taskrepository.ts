import { injectable } from "tsyringe";
import Task, { type taskdata } from "../models/task.ts";
import usertable from "../models/user.ts";
import { IRepository } from "../shared/interfaces/IRepository.ts";

@injectable()
export class taskRepository implements IRepository<taskdata> {
  async create(data: Partial<taskdata>): Promise<taskdata> {
    const newTask = new Task(data);
    return await newTask.save();
  }

  async getAll(): Promise<taskdata[]> {
    return await Task.find();
  }

  async getById(taskId: string): Promise<taskdata | null> {
    return await Task.findById(taskId);
  }

  async updateById(taskId: string, updateData: Partial<taskdata>): Promise<taskdata | null> {
    return await Task.findByIdAndUpdate(taskId, updateData, { new: true });
  }

  async assignUnassignedTasks(userId: string) {
    return await Task.updateMany({ assigned: null }, { $set: { assigned: userId } });
  }

  async getTasksForUser(userId: string) {
    return await Task.find({ assigned: userId }).populate("assigned");
  }
  async deleteById(taskId: string): Promise<taskdata | null> {
    return await Task.findByIdAndDelete(taskId);
  }
}
