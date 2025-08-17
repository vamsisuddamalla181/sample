import express from "express"
const taskroute=express.Router()
import { container } from "tsyringe"
import { TaskController } from "./taskController"
const taskcontroller=container.resolve(TaskController)

/**
 * @swagger
 * /posttask:
 *   post:
 *     summary: Create a task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created successfully
 */
taskroute.post("/posttask",taskcontroller.createTask.bind(taskcontroller));

/**
 * @swagger
 * /assign/user/{userId}:
 *   post:
 *     summary: Assign a task to a user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Fix login bug"
 *               description:
 *                 type: string
 *                 example: "Investigate and resolve the login issue in the app"
 *               status:
 *                 type: string
 *                 enum: [todo, assigned, inprogress, completed]
 *                 example: "assigned"
 *     responses:
 *       201:
 *         description: Task assigned successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

taskroute.post("/assigntask/user/:userId",taskcontroller.assignTask.bind(taskcontroller));

/**
 * @swagger
 * /gettask/user/{userId}:
 *   get:
 *     summary: Get tasks for a specific user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: List of tasks
 */
taskroute.get("/gettask/user/:userId",taskcontroller.getTasksForUser.bind(taskcontroller));

/**
 * @swagger
 * /assignunassigned/user/{userId}:
 *   post:
 *     summary: Assign unassigned tasks to a user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: Unassigned tasks assigned successfully
 */
taskroute.post("/assignunassigned/user/:userId",taskcontroller.assignUnassignedTasks.bind(taskcontroller));

export default taskroute;