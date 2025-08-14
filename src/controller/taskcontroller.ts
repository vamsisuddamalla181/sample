import "reflect-metadata";
import type { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { taskRepository } from "../repository/taskrepository.js";

@injectable()
export class TaskController {
  constructor(@inject(taskRepository) private taskRepo: taskRepository) {}

  async createTask(req: Request, res: Response) {
    try {
      const task = await this.taskRepo.createTask(req.body);
      res.status(201).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async assignTask(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("User ID not found");

      const user = await this.taskRepo.findUserById(userId);
      if (!user) throw new Error("User not found");

      const updatedTasks = await this.taskRepo.assignTasksToUser(userId);
      res.status(200).json(updatedTasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async assignUnassignedTasks(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("User ID not found");

      const updatedTasks = await this.taskRepo.assignUnassignedTasks(userId);
      res.status(200).json({
        message: `All unassigned tasks have been assigned to user ${userId}`,
        updatedTasks,
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTasksForUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("User ID not found");

      const tasks = await this.taskRepo.getTasksForUser(userId);
      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
    
  }
}
