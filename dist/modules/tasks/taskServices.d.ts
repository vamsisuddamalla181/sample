import { type taskdata } from "./task.ts";
declare const taskservice: {
    assigntask(userId: string, data: Partial<taskdata>): Promise<import("mongoose").Document<unknown, {}, taskdata, {}, {}> & taskdata & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    assignTaskforUser(userId: string): Promise<void>;
    newtaskforuser(userId: string): Promise<(import("mongoose").Document<unknown, {}, taskdata, {}, {}> & taskdata & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
};
export default taskservice;
