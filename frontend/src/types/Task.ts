export default interface Task {
    id: number | string,
    title: string,
    description?: string,
    status: "pending" | "in progress" | "done",
}