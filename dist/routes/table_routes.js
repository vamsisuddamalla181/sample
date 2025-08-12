import express from "express";
const route = express.Router();
import taskcontroler from "../controller/taskcontroler.js";
import usercontrollers from "../controller/usercontrollers.js";
route.post("/post", usercontrollers.createUser.bind(usercontrollers));
route.get("/getall", usercontrollers.getAllUsers.bind(usercontrollers));
route.post("/assign/:userId", taskcontroler.assignTask.bind(taskcontroler));
route.get("/user/:userId", taskcontroler.getTasksForUser.bind(taskcontroler));
export default route;
//# sourceMappingURL=table_routes.js.map