import "reflect-metadata";
import type { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { UserRepository } from "../repository/userrepository.ts";
@injectable()
export class UserController {
  constructor(@inject(UserRepository) private userRepo: UserRepository) {}

  async createUser(req: Request, res: Response) {
    try {
      const user = await this.userRepo.createUser(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userRepo.getAllUsers();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("user id not found");
      const user = await this.userRepo.getById(userId);
      if (!user) throw new Error("User not found");
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getByIdAndUpdate(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("user id not found");
      const updatedUser = await this.userRepo.updateById(userId, req.body);
      if (!updatedUser) throw new Error("Cannot update user");
      res.status(200).json(updatedUser);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
