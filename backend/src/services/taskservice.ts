import { taskStore } from "../models/taskstore";
import { Task, TaskInput } from "../types/task";

export const taskService = {
	getAllTasks(): Task[] {
		return taskStore.getAll();
	},
	addTask(task: Task): Task {
		return taskStore.add(task);
	},
	deleteTask(id: string): boolean {
		return taskStore.delete(id);
	},
	updateTask(id: string, task: Task) : Task {
		return taskStore.update(id, task);
	},
	updateTaskStatus(id: string, status: string): TaskInput {
		return taskStore.updateStatus(id, status);
	},
	resetTasks(): void{
		return taskStore.reset();
	},
};
