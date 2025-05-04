import { taskStore } from "../models/taskstore";
import { Task, Status } from "../types/task";
export const getAllTasks = () => {
	return taskStore.getAll();
};
export const addTask = (task: Task) => {
	return taskStore.add(task);
};

export const deleteTask = (id: string) => {
	return taskStore.delete(id);
};
export const updateTask = (id: string, task: Task) => {
	return taskStore.update(id, task);
};
export const updateTaskStatus = (id: string, status: Status) => {
	return taskStore.updateStatus(id, status);
};
