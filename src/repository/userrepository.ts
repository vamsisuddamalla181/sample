import { injectable } from "tsyringe";
import User,{type userdata} from "../models/user.ts"
@injectable()
export class UserRepository{
    async createUser(userData: Partial<userdata>){
        return await User.create(userData)
    }
    async getAllUsers(){
        return await User.find()
    }
    async getById(userId:String){
        return await User.findById(userId)
    }
    async updateById(userId: string, updateData: Partial<userdata>) {
        return await User.findByIdAndUpdate(userId, updateData);
    }
}