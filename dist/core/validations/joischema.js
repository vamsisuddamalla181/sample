"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskValidationSchema = exports.userValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const mongoose_1 = require("mongoose");
exports.userValidationSchema = joi_1.default.object({
    username: joi_1.default.string().min(5).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().pattern(/^\+91\d{10}$/).required(),
    fullname: joi_1.default.string().min(5).max(30).required(),
    password: joi_1.default.string().min(6).required(),
    role: joi_1.default.string().valid("admin", "normaluser").required()
});
exports.taskValidationSchema = joi_1.default.object({
    title: joi_1.default.string().trim().required(),
    description: joi_1.default.string().min(5).required().messages({ "string.min": "please enter the descrition more than 5 words" }),
    status: joi_1.default.string().valid("todo", "assigned", "inprogress", "completed").required(),
    assigned: joi_1.default.custom((val, err) => {
        if (val !== null && !mongoose_1.Types.ObjectId.isValid(val)) {
            return err.error("any.invalid");
        }
    }).allow(null).messages({ "any.invalid": "please provide valid id" })
});
