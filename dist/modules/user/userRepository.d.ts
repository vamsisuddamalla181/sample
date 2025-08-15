import { type userdata } from "./user.ts";
import { IRepository } from "../../shared/interfaces/IRepository.ts";
export declare class UserRepository implements IRepository<userdata> {
    create(userData: Partial<userdata>): Promise<userdata>;
    getAll(): Promise<userdata[]>;
    getById(userId: string): Promise<userdata | null>;
    updateById(userId: string, updateData: Partial<userdata>): Promise<userdata | null>;
    deleteById(userId: String): Promise<(import("mongoose").Document<unknown, {}, userdata, {}, {}> & userdata & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
