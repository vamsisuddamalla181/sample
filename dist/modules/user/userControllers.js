"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const userRepository_1 = require("./userRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const joischema_1 = require("../../core/validations/joischema");
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error, value } = joischema_1.userValidationSchema.validate(req.body);
                if (error) {
                    console.log(error.message);
                }
                const _a = req.body, { password } = _a, rest = __rest(_a, ["password"]);
                const hasheed = yield bcrypt_1.default.hash(password, 10);
                const user = yield this.userRepo.create(Object.assign(Object.assign({}, rest), { password: hasheed }));
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userRepo.getAll();
                res.json(users);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                if (!userId)
                    throw new Error("user id not found");
                const user = yield this.userRepo.getById(userId);
                if (!user)
                    throw new Error("User not found");
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    getByIdAndUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                if (!userId)
                    throw new Error("user id not found");
                const updatedUser = yield this.userRepo.updateById(userId, req.body);
                if (!updatedUser)
                    throw new Error("Cannot update user");
                res.status(200).json(updatedUser);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                if (!userId)
                    throw new Error("user id not found");
                const deletedUser = yield this.userRepo.deleteById(userId);
                if (!deletedUser)
                    throw new Error("User not found or already deleted");
                res.status(200).json({ message: "User deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
};
exports.UserController = UserController;
exports.UserController = UserController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(userRepository_1.UserRepository))
], UserController);
