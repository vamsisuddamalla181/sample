import "reflect-metadata";
import type { Request, Response } from "express";
import { UserRepository } from "./userRepository.ts";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createUser(req: Request, res: Response): Promise<void>;
    getAllUsers(req: Request, res: Response): Promise<void>;
    getById(req: Request, res: Response): Promise<void>;
    getByIdAndUpdate(req: Request, res: Response): Promise<void>;
    deleteById(req: Request, res: Response): Promise<void>;
}
