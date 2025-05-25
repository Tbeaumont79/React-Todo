import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
	getAllTasks,
	createTask,
	deleteTask,
	updateTask,
} from "../api/tasksApi";
import { TodoInput } from "../schema/todoSchema";

export const useTasks = () => {
	const queryClient = useQueryClient();

	const query = useQuery({
		queryKey: ["tasks"],
		queryFn: getAllTasks,
	});

	const addMutation = useMutation({
		mutationFn: (data: TodoInput) => createTask(data),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
	});

	const deleteMutation = useMutation({
		mutationFn: (id: string) => deleteTask(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
	});

	const updateMutation = useMutation({
		mutationFn: ({ id, data }: { id: string; data: TodoInput }) =>
			updateTask(id, data),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
	});

	return {
		...query,
		createTask: addMutation.mutate,
		deleteTask: deleteMutation.mutate,
		updateTask: updateMutation.mutate,
	};
};
