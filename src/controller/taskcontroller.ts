import "reflect-metadata";
import type { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import taskservice from "../services/taskservices.ts";

@injectable()
export class TaskController {


  async createTask(req: Request, res: Response) {
    try {
      const { userId, ...taskData } = req.body;

      if (!userId) throw new Error("User ID is required to assign task");

      const newTask = await taskservice.assigntask(userId, taskData);
      res.status(201).json(newTask);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

<<<<<<< HEAD:src/controller/taskcontroller.ts
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
=======
>>>>>>> f4603127dc1acfaaa15c710a9043deeea8484c08:src/controller/taskcontroler.ts

  async assignUnassignedTasks(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("User ID not found");

      await taskservice.assignTaskforUser(userId);

      res.status(200).json({
        message: `All unassigned tasks have been assigned to user ${userId}`,
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTasksForUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("User ID not found");

      const tasks = await taskservice.newtaskforuser(userId);
      res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
    
  }
}
