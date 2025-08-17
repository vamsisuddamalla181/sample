import express from "express"
const userroute=express.Router()
import { UserController } from "./userControllers"
import { container } from "tsyringe"
const usercontroller=container.resolve(UserController)

/**
 * @swagger
 * /userdetails:
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
 *               username:
 *                 type: string
 *                 example: vamsi
 *               email:
 *                 type: string
 *                 example: vamsi@gmail.com
 *               phone:
 *                 type: string
 *                 example: "+919550085451"
 *               fullname:
 *                 type: string
 *                 example: vamsikrishna
 *               password:
 *                 type: string
 *                 example: vamsi@123
 *               role:
 *                 type: string
 *                 example: admin
 *     responses:
 *       201:
 *         description: User created successfully
 */

userroute.post("/userdetails",usercontroller.createUser.bind(usercontroller))

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
 * /getbyid/user/{userId}:
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
 * /update/user/{userId}:
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
 *             properties:
 *               username:
 *                 type: string
 *                 example: "vamsi krishna"
 *               email:
 *                 type: string
 *                 example: "vamsik@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "+919550085451"
 *               fullname:
 *                 type: string
 *                 example: "vamsikrishna"
 *               password:
 *                 type: string
 *                 example: "P@ssw0rd123"
 *               role:
 *                 type: string
 *                 enum: [normaluser, admin]
 *                 example: "admin"
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

userroute.post("/update/user/:userId", usercontroller.getByIdAndUpdate.bind(usercontroller));
export default userroute