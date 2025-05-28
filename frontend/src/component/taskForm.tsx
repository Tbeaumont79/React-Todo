import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TodoInput } from "../schema/todoSchema";
import { useEffect } from "react";

type Props = {
	onSubmit: (data: TodoInput) => void;
	defaultValues?: Partial<TodoInput>;
	buttonLabel?: string;
};

export const TaskForm = ({
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
			className=" bg-info-content text-white flex flex-col justify-center items-left gap-y-5 mt-10 p-5 rounded-2xl md:w-[500px] lg:w-[500px]"
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
			<label
				htmlFor="title"
				className="text-base-300 font-bold text-lg md:text-xl lg:text-2xl"
			>
				Titre
			</label>
			<input
				{...register("title")}
				placeholder="Titre"
				id="title"
				className="placeholder-white w-full bg-base-200 rounded-2xl py-3 px-5 shadow-xs shadow-gray-950"
			/>
			<label
				htmlFor="description"
				id="description"
				className="text-base-300 font-bold text-lg md:text-xl lg:text-2xl"
			>
				Description
			</label>
			<textarea
				{...register("description")}
				placeholder="Description"
				id="description"
				className="min-h-10 w-full placeholder-white bg-base-200 rounded-2xl py-2 px-5 shadow-xs shadow-gray-950 resize-none"
			/>
			{errors.status && (
				<p className="text-red-600 bg-red-300 p-2 rounded-2xl">
					{errors.status.message}
				</p>
			)}
			<label
				htmlFor="status"
				className="text-base-300 font-bold text-lg md:text-xl lg:text-2xl"
			>
				Status
			</label>
			<select
				{...register("status")}
				id="status"
				className="bg-base-200 rounded-2xl w-full py-5 px-2 shadow-xs shadow-gray-950 text-white"
			>
				<option value="">Sélectionner un statut</option>
				<option value="todo">À faire</option>
				<option value="in progress">En cours</option>
				<option value="done">Terminée</option>
			</select>
			<button
				type="submit"
				className="bg-orange-600 py-3 px-10 rounded-xl w-full hover:bg-orange-400 shadow-xs shadow-amber-900"
			>
				{buttonLabel}
			</button>
		</form>
	);
};
