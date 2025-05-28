import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
	getAllTasks,
	createTask,
	deleteTask,
	updateTask,
} from "../api/tasksApi";
import { TodoInput } from "../schema/todoSchema";
import Task, { Data } from "../types/Task";

export const useTasks = () => {
	const queryClient = useQueryClient();
	const queryKey = ["tasks"];
	const query = useQuery<Data, Error>({
		queryKey,
		queryFn: getAllTasks,
		staleTime: 1000 * 60 * 5,
		gcTime: 1000 * 60 * 5,
		refetchOnWindowFocus: true,
		retry: 2,
		retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
	});

	const handleMutationError = (error: Error, action: string) => {
		console.error(`Error during ${action}:`, error);
	};
	const handleMutationSuccess = (action: string) => {
		console.log(`${action} successful`);
	};

	const addMutation = useMutation<Task, Error, TodoInput>({
		mutationFn: createTask,
		onSuccess: (newTask: Task) => {
			queryClient.setQueryData<Data>(queryKey, (prevTasks) => {
				if (prevTasks && Array.isArray(prevTasks.data)) {
					return {
						...prevTasks,
						data: [...prevTasks.data, newTask],
					};
				}
				return { data: [newTask], status: 201 };
			});
			handleMutationSuccess("createTask");
		},
		onError: (error) => handleMutationError(error, "createTask"),
	});

	const deleteMutation = useMutation<boolean, Error, string>({
		mutationFn: deleteTask,
		onSuccess: (deleteResult: boolean, deleteId: string) => {
			
			queryClient.setQueryData<Data>(queryKey, (prevTasks: Data) => {
				if (prevTasks && Array.isArray(prevTasks.data)) {
					return {
						...prevTasks,
						data: prevTasks.data.filter((task) => task.id !== deleteId),
					};
				}
				return { data: [], status: 200 };
			});
			handleMutationSuccess("deleteTask");
		},
		onError: (error: Error) => {
			handleMutationError(error, "deleteTask");
		},
	});

	const updateMutation = useMutation<
		Task,
		Error,
		{ id: string; data: Partial<TodoInput> }
	>({
		mutationFn: ({ id, data }: { id: string; data: TodoInput }) =>
			updateTask(id, data),
		onSuccess: (updateTask: Task) => {
			queryClient.setQueryData<Data>(queryKey, (prevTasks) => {
				if (prevTasks && Array.isArray(prevTasks.data)) {
					return {
						...prevTasks,
						data: prevTasks.data.map((task) =>
							task.id === updateTask.id ? updateTask : task
						),
					};
				}
				return { data: [], status: 200 };
			}),
				handleMutationSuccess("updateTask");
		},
		onError: (error) => {
			handleMutationError(error, "updateTask");
		},
	});

	return {
		...query,
		createTask: addMutation.mutate,
		deleteTask: deleteMutation.mutate,
		updateTask: updateMutation.mutate,
	};
};
