"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("./config/db/mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./docs/swagger");
const userRoutes_1 = __importDefault(require("./modules/user/userRoutes"));
const taskRoutes_1 = __importDefault(require("./modules/tasks/taskRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = 9000;
app.use((0, cors_1.default)());
app.use("/api-docs", swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swagger_1.swaggerSpec));
app.use("/", taskRoutes_1.default);
app.use("/", userRoutes_1.default);
(0, mongodb_1.mongo)();
app.get("/sample", (req, res) => {
    res.send("hello world");
});
app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
    console.log("Swagger docs at http://localhost:9000/api-docs");
});
app.use("/user", userRoutes_1.default);
app.use("/tasks", taskRoutes_1.default);
