import { request, response, type Request ,type Response} from "express";
import User from "../models/user.ts";
import bcrypt from "bcrypt"
class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { username, email,phone,fullname,password } = req.body;
      const hashed=await bcrypt.hash(password,10)
      const user = new User({ username, email,phone,fullname,password:hashed });
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
  async getById(req:Request,res:Response){
    try{
      const userid=req.params.userId
      const findone=await User.findById(userid)
      if(!findone){
        throw new Error("can not find the user")
      }
      res.status(200).json(findone)
    }
    catch(error:any){
      res.status(500).json({error:error})
    }
  }
  async getByIdAndUpdate(req:Request,res:Response){
    try{
      const {username, email,phone,fullname,password } = req.body;
      const findandupdate=await User.findByIdAndUpdate(req.params.userId,{username, email,phone,fullname,password})
      if(!findandupdate){
        throw new Error("can not update")
      }
      res.status(200).json(findandupdate)
    }
    catch(error:any){
      res.status(500).json({error:error})
    }
  }
}

export default new UserController();

