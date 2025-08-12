import usertable from "../models/user.js";
import Task, {} from "../models/task.js";
const taskservice = {
    async assigntask(userId, data) {
        const find = await usertable.findById(userId);
        if (!find) {
            throw new Error("User not found");
        }
        const newTask = new Task({
            title: data.title,
            description: data.description,
            status: data.status,
            assigned: userId,
        });
        return newTask.save();
    },
    async newtaskforuser(userId) {
        return Task.find({ assigned: userId }).populate("assigned");
    },
};
export default taskservice;
//# sourceMappingURL=taskservices.js.map