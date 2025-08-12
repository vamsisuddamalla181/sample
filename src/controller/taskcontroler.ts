import type { Request, Response } from "express";
import taskservice from "../services/taskservices.ts";
import Task from "../models/task.ts";

class TaskController {
  async createtask(req: Request, res: Response) {
    try {
        const { title, description, status, assigned } = req.body;
        console.log("Request body:", req.body);
        const task1 = new Task({ title, description, status, assigned });
        await task1.save();
        res.status(201).json(task1);
    } 
    catch (error: any) {
        console.error("Insert task error:", error);
        res.status(400).json({ error: error.message });
    }
  }
  

  async assignTask(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      const data = req.body;
      if(!userId){
        throw new Error("user id not found")
      }
      const task = await taskservice.assigntask(userId, data);
      res.status(201).json(task);
    } catch (error: any) {
      if (error.message === "User not found") {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  async getTasksForUser(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if(!userId){
        throw new Error("user id not found")
      }
      const tasks = await taskservice.newtaskforuser(userId);
      res.json(tasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new TaskController;
