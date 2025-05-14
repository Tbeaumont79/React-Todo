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
			onSubmit={handleSubmit((data) => {
				onSubmit(data);
				reset();
			})}
		>
			<input {...register("title")} placeholder="Titre" />
			{errors.title && <p>{errors.title.message}</p>}
			<textarea {...register("description")} placeholder="Description" />
			<button type="submit">Ajouter</button>
		</form>
	);
};
