import { connection } from "../db/db.js";
import { QueryResult } from "pg";
import { TaskEntity, Task, TaskEdit } from "../protocols/tasksProtocols.js";

async function createTask(task: Task): Promise<QueryResult<TaskEntity>> {
  const result = await connection.query(
    `
    INSERT INTO tasks (name, description, member, deadline) 
    VALUES ($1, $2, $3, $4)
    `,
    [task.name, task.description, task.member, task.deadline]
  );
  return result;
}

async function listTasks(): Promise<QueryResult<TaskEntity>> {
  const result = await connection.query(
    `
    SELECT * 
    FROM tasks
    `
  );
  return result;
}

async function editTasks(
  task: TaskEdit,
  taskId: number
): Promise<QueryResult<TaskEntity>> {
  const result = await connection.query(
    `
    UPDATE tasks
    SET name=$1, description=$2, member=$3, deadline=$4
    WHERE id=$5
    `,
    [task.name, task.description, task.member, task.deadline, taskId]
  );
  return result;
}

async function deleteTask(taskId: number) {
  const result = await connection.query(
    `
    DELETE FROM tasks
    WHERE id=$1
    `,
    [taskId]
  );
  return result;
}

async function filterTaskId(taskId: number) {
  const result = await connection.query(
    `
    SELECT *
    FROM tasks
    WHERE id=$1    
    `,
    [taskId]
  );
  return result;
}

async function filterTaskMember(member: string) {
  const result = await connection.query(
    `
  SELECT *
  FROM tasks
  WHERE member LIKE $1
  `,
    [member]
  );
  return result;
}

export {
  createTask,
  listTasks,
  editTasks,
  deleteTask,
  filterTaskId,
  filterTaskMember,
};
