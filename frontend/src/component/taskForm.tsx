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
			className="border-1 w-[600px] h-96 border-purple-50 bg-purple-50 text-white flex flex-col gap-y-5 p-10"
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<input
				{...register("title")}
				placeholder="Titre"
				className="placeholder-white bg-black rounded-2xl py-2 px-5"
			/>
			{errors.title && <p className="text-red-500">{errors.title.message}</p>}
			<textarea
				{...register("description")}
				placeholder="Description"
				className="placeholder-white bg-black rounded-2xl p-5"
			/>
			<button type="submit" className="bg-black py-2 px-10 rounded-xl w-40">
				Ajouter
			</button>
		</form>
	);
};
