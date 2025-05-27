export default interface Task {
	id: string;
	title: string;
	description?: string;
	status: string;
}

export interface Data {
	data: Task[];
}
