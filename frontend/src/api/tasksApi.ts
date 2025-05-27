import axios from "axios";
import { TodoInput } from "../schema/todoSchema";
const API_URL = "/api";

export const getAllTasks = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

export const createTask = async (task: TodoInput) => {
	const response = await axios.post(API_URL, task);
	return response.data;
};

export const deleteTask = async (id: string) => {
	const response = await axios.delete(`${API_URL}/${id}`);
	return response.data;
};

export const updateTask = async (id: string, task: TodoInput) => {
	const response = await axios.put(`${API_URL}/${id}`, task);
	return response.data;
};
