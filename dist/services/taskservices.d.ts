import { type taskdata } from "../models/task.js";
declare const taskservice: {
    assigntask(userId: string, data: Partial<taskdata>): Promise<import("mongoose").Document<unknown, {}, taskdata, {}, {}> & taskdata & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    newtaskforuser(userId: string): Promise<(import("mongoose").Document<unknown, {}, taskdata, {}, {}> & taskdata & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
};
export default taskservice;
//# sourceMappingURL=taskservices.d.ts.map