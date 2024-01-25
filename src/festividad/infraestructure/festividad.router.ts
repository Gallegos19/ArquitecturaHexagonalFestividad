import { Router } from "express";
import {
  getTasksController,
  getTaskByIdController,
  createTaskController,
  deleteTaskController,
  putTaskController,
} from "./dependencies.festividad";
import { verifyJwt } from "../../auth/aplication/middlewares/jwt.middleware";

const taskRouter = Router();

taskRouter
  .get("/", verifyJwt, getTasksController.run.bind(getTasksController))
  .get("/:id", verifyJwt, getTaskByIdController.run.bind(getTaskByIdController))
  .post("/", verifyJwt, createTaskController.run.bind(createTaskController))
  .delete("/:id", deleteTaskController.run.bind(deleteTaskController))
  .put("/:id", putTaskController.run.bind(putTaskController));

export default taskRouter;
