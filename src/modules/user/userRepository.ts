import { injectable } from "tsyringe";
import User,{type userdata} from "./user.ts";
import { IRepository } from "../../shared/interfaces/IRepository.ts";
import { promises } from "node:dns";

@injectable()
export class UserRepository implements IRepository<userdata> {
  async create(userData: Partial<userdata>): Promise<userdata> {
    return await User.create(userData);
  }

  async getAll(): Promise<userdata[]> {
    return await User.find();
  }

  async getById(userId: string): Promise<userdata | null> {
    return await User.findById(userId);
  }

  async updateById(
    userId: string,
    updateData: Partial<userdata>
  ): Promise<userdata | null> {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  }
  async deleteById(userId:String){
    return await User.findByIdAndDelete(userId)
  }
}
