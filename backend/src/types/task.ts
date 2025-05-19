export type Task = {
	id: string | number;
	title: string;
	description: string;
	status: string;
};

export type TaskInput = Omit<Task, "id" | "status">;
