import { type taskdata } from "./task.ts";
import { IRepository } from "../../shared/interfaces/IRepository.ts";
export declare class taskRepository implements IRepository<taskdata> {
    create(data: Partial<taskdata>): Promise<taskdata>;
    getAll(): Promise<taskdata[]>;
    getById(taskId: string): Promise<taskdata | null>;
    updateById(taskId: string, updateData: Partial<taskdata>): Promise<taskdata | null>;
    assignTasksToUser(userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    assignUnassignedTasks(userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    getTasksForUser(userId: string): Promise<(import("mongoose").Document<unknown, {}, taskdata, {}, {}> & taskdata & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    deleteById(taskId: string): Promise<taskdata | null>;
}
