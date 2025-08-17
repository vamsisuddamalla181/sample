"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = exports.swaggerUi = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Sample API",
        version: "1.0.0",
        description: "API documentation for Sample project",
    },
    servers: [
        {
            url: "https://my-app.vercel.app",
        },
    ],
};
const options = {
    swaggerDefinition,
    apis: ["./src/modules/**/*.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.swaggerSpec = swaggerSpec;
