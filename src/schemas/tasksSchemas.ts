import Joi from "joi";

const createTaskSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  member: Joi.string().required(),
  deadline: Joi.date(),
});

export { createTaskSchema };
