import type { Request ,Response} from "express";
import User from "../models/user.ts";
class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { username, email } = req.body;
      const user = new User({ username, email });
      await user.save();

      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error });
    }
  }
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error });
    }
  }
}
export default new UserController();

