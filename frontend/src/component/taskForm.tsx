import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoInput } from "../schema/todoSchema";

type Props = {
	onSubmit: (data: TodoInput) => void;
};

export const TodoForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TodoInput>({ resolver: zodResolver(todoSchema) });
	return (
		<form
			className="w-[600px] h-96 bg-gray-300 text-white flex flex-col gap-y-10 p-10 rounded-2xl"
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			{errors.title && (
				<p className="text-red-600 bg-red-300 p-2 rounded-2xl">
					{errors.title.message}
				</p>
			)}
			<input
				{...register("title")}
				placeholder="Titre"
				className="placeholder-white bg-gray-800 rounded-2xl py-3 px-5 shadow-xs shadow-gray-950"
			/>
			<textarea
				{...register("description")}
				placeholder="Description"
				className="h-96 min-h-10 placeholder-white bg-gray-800 rounded-2xl py-2 px-5 shadow-xs shadow-gray-950 resize-none"
			/>
			<button
				type="submit"
				className="bg-orange-600 py-3 px-10 rounded-xl w-40 hover:bg-orange-400 shadow-xs shadow-amber-900"
			>
				Ajouter
			</button>
		</form>
	);
};
