type TaskEntity = {
  id: number;
  name: string;
  description: string;
  member: string;
  created: Date;
  deadline: Date;
};

type Task = Omit<TaskEntity, "id">;

type TaskEdit = Partial<TaskEntity>;

export { TaskEntity, Task, TaskEdit };
