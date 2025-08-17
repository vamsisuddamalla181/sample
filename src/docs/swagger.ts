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
      url: "/",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/modules/**/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };