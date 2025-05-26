import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoInput } from "../schema/todoSchema";
import { useEffect } from "react";

type Props = {
	onSubmit: (data: TodoInput) => void;
	defaultValues?: Partial<TodoInput>;
	buttonLabel?: string;
};

export const TodoForm = ({
	onSubmit,
	defaultValues,
	buttonLabel = "Ajouter",
}: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<TodoInput>({ resolver: zodResolver(todoSchema), defaultValues });

	useEffect(() => {
		reset(defaultValues);
	}, [defaultValues, reset]);

	return (
		<form
			className="bg-gray-300 text-white flex flex-col justify-center items-center gap-y-10 p-10 rounded-2xl"
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
				className="min-h-10 placeholder-white bg-gray-800 rounded-2xl py-2 px-5 shadow-xs shadow-gray-950 resize-none"
			/>
			{errors.status && (
				<p className="text-red-600 bg-red-300 p-2 rounded-2xl">
					{errors.status.message}
				</p>
			)}
			<select
				{...register("status")}
				className="bg-gray-800 rounded-2xl py-3 px-5 shadow-xs shadow-gray-950 text-white"
			>
				<option value="">Sélectionner un statut</option>
				<option value="todo">À faire</option>
				<option value="in progress">En cours</option>
				<option value="done">Terminée</option>
			</select>
			<button
				type="submit"
				className="bg-orange-600 py-3 px-10 rounded-xl w-40 hover:bg-orange-400 shadow-xs shadow-amber-900"
			>
				{buttonLabel}
			</button>
		</form>
	);
};
