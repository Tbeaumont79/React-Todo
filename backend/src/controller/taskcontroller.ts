import { Request, Response } from "express";
import { taskService } from "../services/taskservice";

export const getAllTasks = async (req: Request, res: Response) => {
	try {
		const tasks = await taskService.getAllTasks();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json({ message: "Error fetching tasks" });
	}
};
export const addTask = async (req: Request, res: Response) => {
	try {
		const task = await taskService.addTask(req.body);
		res.status(201).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error adding task" });
	}
};
export const updateTask = async (req: Request, res: Response) => {
	try {
		const task = await taskService.updateTask(req.params.id, req.body);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: "Error updating task" });
	}
};
export const updateTaskStatus = async (req: Request, res: Response) => {
	try {
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
