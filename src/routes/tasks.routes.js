import { Router } from "express";
import ctrlTask from "../controllers/Task.controllers";

const {
  findAllTasks,
  createTask,
  findOneTask,
  deleleTask,
  findAllDoneTasks,
  updateTask,
} = ctrlTask;

const router = Router();

router.get("/", findAllTasks);

router.get("/done", findAllDoneTasks);

router.get("/:id", findOneTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleleTask);

export default router;
