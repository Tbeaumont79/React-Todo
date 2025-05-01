export type Status = "pending" | "done";

export type Task = {
	id: string;
	title: string;
	description: string;
	status: Status;
};

export type TaskInput = Omit<task, "id" | "status">;
