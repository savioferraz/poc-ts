import { Request, Response, NextFunction } from "express";
import { createTaskSchema } from "../schemas/tasksSchemas.js";
import { Task } from "../protocols/tasksProtocols.js";

async function createTaskMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const newTask = req.body as Task;

  const validation = createTaskSchema.validate(newTask, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((error) => error.message);
    res.status(422).send(errors);
    return;
  }

  next();
}

export { createTaskMiddleware };
