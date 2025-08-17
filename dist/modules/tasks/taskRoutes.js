"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskroute = express_1.default.Router();
const tsyringe_1 = require("tsyringe");
const taskController_1 = require("./taskController");
const taskcontroller = tsyringe_1.container.resolve(taskController_1.TaskController);
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
taskroute.post("/posttask", taskcontroller.createTask.bind(taskcontroller));
/**
 * @swagger
 * /assigntask/user/{userId}:
 *   post:
 *     summary: Assign a single task to a user
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to assign the task to
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
 *         description: Invalid request
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
taskroute.post("/assigntask/user/:userId", taskcontroller.assignTask.bind(taskcontroller));
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
taskroute.get("/gettask/user/:userId", taskcontroller.getTasksForUser.bind(taskcontroller));
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
taskroute.post("/assignunassigned/user/:userId", taskcontroller.assignUnassignedTasks.bind(taskcontroller));
exports.default = taskroute;
