import { Request, Response } from "express";
import * as tasksRepositories from "../repositories/tasksRepositories.js";
import { Task } from "../protocols/tasksProtocols.js";

const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = req.body as Task;

    await tasksRepositories.createTask(newTask);

    res.status(201).send(`Task "${newTask.name}" created`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const listTasks = async (req: Request, res: Response) => {
  try {
    const member = req.query.name as string;

    if (member) {
      const result = await tasksRepositories.filterTaskMember(member);
      res.status(200).send(result.rows);
    } else {
      const result = await tasksRepositories.listTasks();
      res.status(200).send(result.rows);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const editTasks = async (req: Request, res: Response) => {
  try {
    const newTask = req.body as Task;

    const taskId = Number(req.params.id);

    const result = await tasksRepositories.filterTaskId(taskId);

    if (result.rows.length === 0) {
      res.status(401).send(`Couldn't find task ${taskId}`);
      return;
    }

    await tasksRepositories.editTasks(newTask, taskId);
    res.status(201).send(`Task updated`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.id);

    const result = await tasksRepositories.filterTaskId(taskId);

    if (result.rows.length === 0) {
      res.status(401).send(`Couldn't find task ${taskId}`);
      return;
    }

    await tasksRepositories.deleteTask(taskId);
    res.status(201).send(`Task deleted`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const filterTaskId = async (req: Request, res: Response) => {
  try {
    const taskId = Number(req.params.id);

    const result = await tasksRepositories.filterTaskId(taskId);
    res.status(200).send(result.rows);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { createTask, listTasks, editTasks, deleteTask, filterTaskId };
