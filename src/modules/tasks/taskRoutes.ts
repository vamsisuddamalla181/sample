import express from "express"
const taskroute=express.Router()
import { container } from "tsyringe"
import { TaskController } from "./taskController.ts"
const taskcontroller=container.resolve(TaskController)

taskroute.post("/posttask",taskcontroller.createTask.bind(taskcontroller));
taskroute.post("/assigntask/user/:userId",taskcontroller.assignTask.bind(taskcontroller));
taskroute.get("gettask/user/:userId",taskcontroller.getTasksForUser.bind(taskcontroller));
taskroute.post("assignunassigned/user/:userId",taskcontroller.assignUnassignedTasks.bind(taskcontroller));
export default taskroute
