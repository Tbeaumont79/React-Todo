import { Task, Status } from "../types/task";

let tasks: Task[] = [];

export const taskStore = {
	getAll: (): Task[] => {
		return tasks;
	},
	add: (task: Task): Task => {
		tasks.push(task);
		return task;
	},
	delete: (id: string): boolean => {
		const index = tasks.findIndex((task) => task.id === id);
		if (index === -1) {
			return false;
		}
		tasks.splice(index, 1);
		return true;
	},
	updateStatus: (id: string, status: Status): Task => {
		const task = tasks.find((task) => task.id === id);
		if (!task) {
			throw new Error("Task not found");
		}
		task.status = status;
		return task;
	},
	reset: (): void => {
		tasks = [];
	},
};
