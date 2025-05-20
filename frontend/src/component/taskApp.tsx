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
						<table className="min-w-full border border-gray-300">
							<thead>
								<tr>
									<th className="px-4 py-2 border-b">Titre</th>
									<th className="px-4 py-2 border-b">Description</th>
									<th className="px-4 py-2 border-b">Statut</th>
									<th className="px-4 py-2 border-b">Actions</th>
								</tr>
							</thead>
							<tbody>
								{tasks.map((task: Task) => (
									<tr key={task.id} className="text-center">
										<td className="px-4 py-2 border-b font-bold">
											{task.title}
										</td>
										<td className="px-4 py-2 border-b">{task.description}</td>
										<td className="px-4 py-2 border-b">
											<span className="bg-blue-500 text-white rounded-xl px-2 py-1">
												{task.status}
											</span>
										</td>
										<td className="px-4 py-2 border-b">
											<button
												className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600"
												onClick={() => deleteTask(String(task.id))}
											>
												Supprimer
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)
			)}
		</div>
	);
}
