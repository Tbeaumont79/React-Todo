import { Request, Response } from "express";
import { taskService } from "../services/taskservice";
import { taskSchema, statusSchema } from "../schema/taskschema";
import { v4 as uuidv4 } from "uuid";

export const getAllTasks = async (req: Request, res: Response) => {
	try {
		const tasks = await taskService.getAllTasks();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json({ message: "Error fetching tasks" });
	}
};

export const createTask = async (req: Request, res: Response) => {
	try {
		const newTasks = {
			id: uuidv4(),
			status: req.body.status ? req.body.status : "En attente",
			...req.body,
		};
		const parsed = taskSchema.safeParse(newTasks);
		if (!parsed.success) {
			return res.status(400).json({ message: "Invalid task data" });
		}
		const task = await taskService.addTask(newTasks);
		res.status(201).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error adding task" });
	}
};

export const updateTask = async (req: Request, res: Response) => {
	try {
		const existingTask = taskService
			.getAllTasks()
			.find((t) => t.id === req.params.id);
		if (!existingTask) {
			return res.status(404).json({ message: "Task not found" });
		}
		const updatedTask = { ...existingTask, ...req.body };
		const parsed = taskSchema.safeParse(updatedTask);
		if (!parsed.success) {
			return res.status(400).json({ message: "Invalid task data" });
		}
		const task = await taskService.updateTask(req.params.id, updatedTask);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error updating task" });
	}
};

export const updateTaskStatus = async (req: Request, res: Response) => {
	try {
		const parsed = statusSchema.safeParse(req.body);
		if (!parsed.success) {
			return res.status(400).json({ message: "Invalid status data" });
		}
		const task = await taskService.updateTaskStatus(
			req.params.id,
			req.body.status
		);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error updating task status" });
	}
};

export const deleteTask = async (req: Request, res: Response) => {
	try {
		const result = await taskService.deleteTask(req.params.id);
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ message: "Error deleting task" });
	}
};

export const resetTasks = async (req: Request, res: Response) => {
	try {
		await taskService.resetTasks();
		res.status(200).json({ message: "Tasks reset successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error resetting tasks" });
	}
};
