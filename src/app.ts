import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js";

const server = express();

server.use(express.json());
server.use(tasksRoutes);

server.listen(4000, () => {
  console.log(`Listening on port 4000`);
});
