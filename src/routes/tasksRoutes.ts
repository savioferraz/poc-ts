import express from "express";
import * as tasksControllers from "../controllers/tasksControllers.js";
import { createTaskMiddleware } from "../middlewares/tasksMiddlewares.js";

const router = express.Router();

router.post("/tasks", createTaskMiddleware, tasksControllers.createTask);
router.get("/tasks", tasksControllers.listTasks);
router.put("/task/:id", createTaskMiddleware, tasksControllers.editTasks);
router.delete("/task/:id", tasksControllers.deleteTask);
router.get("/task/:id", tasksControllers.filterTaskId);

export default router;
