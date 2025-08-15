import "reflect-metadata";
import type { Request, Response } from "express";
export declare class TaskController {
    createTask(req: Request, res: Response): Promise<void>;
    assignTask(req: Request, res: Response): Promise<void>;
    assignUnassignedTasks(req: Request, res: Response): Promise<void>;
    getTasksForUser(req: Request, res: Response): Promise<void>;
}
