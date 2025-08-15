import "reflect-metadata";
import type { Request, Response } from "express";
import { injectable, inject } from "tsyringe";
import { UserRepository } from "./userRepository";
import bcrypt from "bcrypt"
import { userValidationSchema } from "../../core/validations/joischema";
@injectable()
export class UserController {
  constructor(@inject(UserRepository) private userRepo: UserRepository) {}

  async createUser(req: Request, res: Response) {
    try {
      const {error,value}=userValidationSchema.validate(req.body)
      if(error){
        console.log(error.message)
      }
      const{password,...rest}=req.body
      const hasheed=await bcrypt.hash(password,10)
      const user = await this.userRepo.create({...rest,password:hasheed});
      res.status(201).json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await this.userRepo.getAll();
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
  async deleteById(req: Request, res: Response) {
    try {
      const userId = req.params.userId;
      if (!userId) throw new Error("user id not found");
      const deletedUser = await this.userRepo.deleteById(userId);
      if (!deletedUser) throw new Error("User not found or already deleted");
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
