export default interface Task {
	id: number | string;
	title: string;
	description?: string;
	status: string;
}
