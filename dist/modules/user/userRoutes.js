"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userroute = express_1.default.Router();
const userControllers_1 = require("./userControllers");
const tsyringe_1 = require("tsyringe");
const usercontroller = tsyringe_1.container.resolve(userControllers_1.UserController);
/**
 * @swagger
 * /post:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
userroute.post("/userdetails", usercontroller.createUser.bind(usercontroller));
/**
 * @swagger
 * /getall:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all users
 */
userroute.get("/getall", usercontroller.getAllUsers.bind(usercontroller));
/**
 * @swagger
 * /getbyid/{userId}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User found
 */
userroute.get("/getbyid/user/:userId", usercontroller.getById.bind(usercontroller));
/**
 * @swagger
 * /update/{userId}:
 *   post:
 *     summary: Update user by ID
 *     tags: [Users]
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
 *     responses:
 *       200:
 *         description: User updated successfully
 */
userroute.post("/update/user/:userId", usercontroller.getByIdAndUpdate.bind(usercontroller));
exports.default = userroute;
