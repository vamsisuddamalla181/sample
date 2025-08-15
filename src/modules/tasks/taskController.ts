import "reflect-metadata";
import type { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import taskservice from "./taskServices.ts";
import Task from "./task.ts";
import { taskValidationSchema } from "../../core/validations/joischema.ts";

@injectable()
export class TaskController {


  async createTask(req: Request, res: Response) {
    try {
      const{error}=taskValidationSchema.validate(req.body)
      if(error){
        throw new Error("Does not meet validation")
        res.status(404).json(error)
      }
      const { ...taskData } = req.body;
      const newTask = await Task.create({...taskData})
      res.status(201).json(newTask);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }


  async assignTask(req: Request, res: Response) {
    try {
      const {...taskData } = req.body;
      const userId=req.params.userId

      if (!userId) throw new Error("User ID is required to assign task");

      const newTask = await taskservice.assigntask(userId, taskData);
      res.status(201).json(newTask);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

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
