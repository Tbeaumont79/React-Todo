import {
	addTask,
	getAllTasks,
	deleteTask,
	updateTaskStatus,
	resetTasks,
	updateTask,
} from "../controller/taskcontroller";
import express from "express";

const router = express.Router();

router.get("/tasks", getAllTasks);

router.post("/tasks", addTask);

router.put("tasks/:id", updateTask);

router.put("/tasks/:id/status", updateTaskStatus);

router.delete("/tasks/:id", deleteTask);

router.post("/tasks/reset", resetTasks);

export default router;
