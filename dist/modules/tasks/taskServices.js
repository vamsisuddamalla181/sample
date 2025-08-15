"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("./task"));
const user_1 = __importDefault(require("../user/user"));
const taskservice = {
    assigntask(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findById(userId);
            if (!user)
                throw new Error("User not found");
            const newTask = new task_1.default({
                title: data.title,
                description: data.description,
                status: data.status || "assigned",
                assigned: userId,
            });
            return newTask.save();
        });
    },
    assignTaskforUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findById(userId);
            if (!user)
                throw new Error("User not found");
            yield task_1.default.updateMany({ assigned: null }, { $set: { assigned: userId } });
        });
    },
    newtaskforuser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return task_1.default.find({ assigned: userId }).populate("assigned");
        });
    },
};
exports.default = taskservice;
