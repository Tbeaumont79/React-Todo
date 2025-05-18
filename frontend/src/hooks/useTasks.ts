import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllTasks, createTask, deleteTask } from "../api/tasksApi";
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
};
