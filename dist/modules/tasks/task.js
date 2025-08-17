"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tasktable = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["todo", "assigned", "inprogress", "completed"], default: "assigned" },
    assigned: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null }
});
const Task = (0, mongoose_1.model)("Task", tasktable);
exports.default = Task;
