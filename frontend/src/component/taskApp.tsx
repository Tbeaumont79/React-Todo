import { TodoForm } from "./taskForm";
import { TaskList } from "./taskList";
import { useTasks } from "../hooks/useTasks";

export function TaskApp() {
	const { isLoading, createTask } = useTasks();
	return (
		<div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
			<h1 className="text-3xl pt-5">Mes tâches</h1>
			<TodoForm onSubmit={createTask} />
			{isLoading ? <p>Chargement ...</p> : <TaskList />}
		</div>
	);
}
