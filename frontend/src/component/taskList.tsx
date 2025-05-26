import Task from "../types/Task";

type Props = {
	tasks: Task[];
	onEdit: (task: Task) => void;
	deleteTask: (id: string) => void;
};

export function TaskList({ tasks, onEdit, deleteTask }: Props) {
	return (
		<div className="w-[300px] overflow-auto h-full flex justify-center items-center mt-10 md:w-full lg:w-full">
			<table className="border border-gray-300">
				<thead>
					<tr>
						<th className="px-4 py-2 border-b text-white">Titre</th>
						<th className="px-4 py-2 border-b text-white">Description</th>
						<th className="px-4 py-2 border-b text-white">Statut</th>
						<th className="px-4 py-2 border-b text-white">Actions</th>
					</tr>
				</thead>
				<tbody>
					{tasks.map((task: Task) => (
						<tr key={task.id} className="text-center">
							<td className="px-4 py-2 border-b font-bold text-white">
								{task.title}
							</td>
							<td className="px-4 py-2 border-b text-white">
								{task.description}
							</td>
							<td className="px-4 py-2 border-b text-white">
								<span className="bg-blue-500 text-white rounded-xl px-2 py-1">
									{task.status}
								</span>
							</td>
							<td className="px-4 py-2 border-b flex gap-2 justify-center">
								<button
									className="bg-orange-500 text-white px-3 py-1 rounded-xl hover:bg-orange-600"
									onClick={() => onEdit(task)}
								>
									Éditer
								</button>
								<button
									className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600"
									onClick={() => {
										deleteTask(task.id);
									}}
									text-white
								>
									Supprimer
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
