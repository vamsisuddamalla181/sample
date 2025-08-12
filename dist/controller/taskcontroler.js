import taskservice from "../services/taskservices.js";
class TaskController {
    async assignTask(req, res) {
        try {
            const userId = req.params.userId;
            const data = req.body;
            if (!userId) {
                throw new Error("user id not found");
            }
            const task = await taskservice.assigntask(userId, data);
            res.status(201).json(task);
        }
        catch (error) {
            if (error.message === "User not found") {
                res.status(404).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: error.message });
            }
        }
    }
    async getTasksForUser(req, res) {
        try {
            const userId = req.params.userId;
            if (!userId) {
                throw new Error("user id not found");
            }
            const tasks = await taskservice.newtaskforuser(userId);
            res.json(tasks);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
export default new TaskController;
//# sourceMappingURL=taskcontroler.js.map