import express from "express";
import type { Request, Response } from "express";
import { mongo } from "./config/db/mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { swaggerUi, swaggerSpec } from "./docs/swagger";
import userroute from "./modules/user/userRoutes";
import taskroute from "./modules/tasks/taskRoutes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Swagger (with CDN fallback for assets)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
    customJs:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
  })
);

//  API routes
app.use("/user", userroute);
app.use("/tasks", taskroute);

//  Sample
app.get("/sample", (req: Request, res: Response) => {
  res.send("hello world");
});

//  Connect DB
mongo();

// ⚠️ Only listen locally, not in Vercel
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
  });
}

export default app; 
