import { TaskForm } from "./taskForm";
import { TaskList } from "./taskList";
import { useTasks } from "../hooks/useTasks";
import Task from "../types/Task";
import { useState } from "react";
import { TodoInput } from "../schema/todoSchema";

export function TaskApp() {
	const {
		data: tasksResponse,
		isLoading,
		createTask,
		deleteTask,
		updateTask,
		isError,
		error,
	} = useTasks();

	const [editingTask, setEditingTask] = useState<Task | null>(null);
	const tasks = tasksResponse?.data || [];

	const handleEdit = (task: Task) => setEditingTask(task);

	const handleUpdate = (data: TodoInput) => {
		if (editingTask) {
			updateTask({
				id: editingTask.id,
				data: {
					title: data.title,
					status: data.status,
					description: data.description ?? editingTask.description,
				},
			});
			setEditingTask(null);
		}
	};
	return (
		<div className="h-screen w-full flex flex-col bg-neutral justify-center items-center ">
			<h1 className="text-3xl pt-5 text-white">Mes tâches</h1>
			{editingTask ? (
				<TaskForm
					onSubmit={handleUpdate}
					defaultValues={editingTask}
					buttonLabel="Mettre à jour"
				/>
			) : (
				<TaskForm onSubmit={createTask} />
			)}
			{isLoading ? (
				<p>Chargement ...</p>
			) : isError ? (
				<p className="text-red-500">
					Erreur de chargement des tâches : {error?.message}
				</p>
			) : (
				<TaskList tasks={tasks} onEdit={handleEdit} deleteTask={deleteTask} />
			)}
		</div>
	);
}
