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
exports.mongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = process.env.mongo_url;
        if (!url) {
            throw new Error("can not find the url");
        }
        const mongo = mongoose_1.default.connect(url)
            .then(() => {
            console.log("server is connected to the database");
        })
            .catch((error) => {
            console.log("server is not connected");
        });
    }
    catch (error) {
        console.log("server error" + error);
    }
});
exports.mongo = mongo;
