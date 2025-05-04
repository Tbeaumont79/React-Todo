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

router.get("/", getAllTasks);

router.post("/", addTask);

router.put("/:id", updateTask);

router.put("/:id/status", updateTaskStatus);

router.delete("/:id", deleteTask);

router.post("/reset", resetTasks);

export default router;
