import { taskStore } from "../models/taskstore";
import { Task, Status } from "../types/task";

export const taskService = {
	getAllTasks: () => {
		return taskStore.getAll();
	},
	addTask: (task: Task) => {
		return taskStore.add(task);
	},
	deleteTask: (id: string) => {
		return taskStore.delete(id);
	},
	updateTask: (id: string, task: Task) => {
		return taskStore.update(id, task);
	},
	updateTaskStatus: (id: string, status: Status) => {
		return taskStore.updateStatus(id, status);
	},
	resetTasks: () => {
		return taskStore.reset();
	},
};
