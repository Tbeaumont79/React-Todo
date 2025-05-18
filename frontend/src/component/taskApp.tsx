import { TodoForm } from "./taskForm";
import { useTasks } from "../hooks/useTasks";
import Task from "../types/Task";

export function TaskApp() {
	const { data: tasksResponse, isLoading, createTask, deleteTask } = useTasks();

	const tasks = tasksResponse?.data;

	return (
		<div>
			<h1>Mes tâches</h1>
			<TodoForm onSubmit={createTask} />
			{isLoading ? (
				<p>Chargement ...</p>
			) : (
				tasks && (
					<ul>
						{tasks.map((task: Task) => {
							<li key={task.id}>
								<strong>{task.title}</strong>
								<button onClick={() => deleteTask(Number(task.id))}></button>
							</li>;
						})}
					</ul>
				)
			)}
		</div>
	);
}
