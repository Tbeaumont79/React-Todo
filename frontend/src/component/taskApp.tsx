import { TodoForm } from "./taskForm";
import { useTasks } from "../hooks/useTasks";
import Task from "../types/Task";

export function TaskApp() {
	const { data: tasksResponse, isLoading, createTask, deleteTask } = useTasks();

	const tasks = tasksResponse && tasksResponse.data;
	return (
		<div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
			<h1 className="text-3xl pt-5">Mes tâches</h1>
			<TodoForm onSubmit={createTask} />
			{isLoading ? (
				<p>Chargement ...</p>
			) : (
				tasks && (
					<div>
						<ul>
							{console.log(tasks)}
							{tasks.map((task: Task) => (
								<li className="flex gap-4" key={task.id}>
									<h2>
										<strong>{task.title}</strong>
									</h2>
									<p>{task.description}</p>
									<button onClick={() => deleteTask(Number(task.id))}>
										delete
									</button>
								</li>
							))}
						</ul>
					</div>
				)
			)}
		</div>
	);
}
