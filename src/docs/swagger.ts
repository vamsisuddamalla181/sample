import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Sample API",
    version: "1.0.0",
    description: "API documentation for Sample project",
  },
  servers: [
    {
      url: process.env.SWAGGER_HOST || "http://localhost:7000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/modules/**/*.ts", "./dist/modules/**/*.js"], 
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };