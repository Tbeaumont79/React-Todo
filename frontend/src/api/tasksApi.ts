import axios from "axios";
import { TodoInput } from "../schema/todoSchema";

const API_URL = "/api";

export const getAllTasks = async () => {
	const data = await axios.get(API_URL);
	return data;
};

export const createTask = async (task: TodoInput) => {
	const { data } = await axios.post(API_URL, task);
	return data;
};

export const deleteTask = async (id: number) => {
	const { data } = await axios.delete(`${API_URL}/${id}`);
	return data;
};
