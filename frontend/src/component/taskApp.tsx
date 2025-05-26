import { TodoForm } from "./taskForm";
import { TaskList } from "./taskList";
import { useTasks } from "../hooks/useTasks";
import Task from "../types/Task";
import { useState } from "react";

export function TaskApp() {
	const {
		data: tasksResponse,
		isLoading,
		createTask,
		deleteTask,
		updateTask,
	} = useTasks();

	const [editingTask, setEditingTask] = useState<Task | null>(null);
	const tasks = tasksResponse?.data || [];

	const handleEdit = (task: Task) => setEditingTask(task);
	const handleUpdate = (data: {
		status: string;
		title: string;
		description?: string;
	}) => {
		if (editingTask) {
			updateTask({
				id: String(editingTask.id),
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
		<div className="h-full w-full flex flex-col justify-center items-center">
			<h1 className="text-3xl pt-5">Mes tâches</h1>
			{editingTask ? (
				<TodoForm
					onSubmit={handleUpdate}
					defaultValues={editingTask}
					buttonLabel="Mettre à jour"
				/>
			) : (
				<TodoForm onSubmit={createTask} />
			)}
			{isLoading ? (
				<p>Chargement ...</p>
			) : (
				<TaskList tasks={tasks} onEdit={handleEdit} deleteTask={deleteTask} />
			)}
		</div>
	);
}
