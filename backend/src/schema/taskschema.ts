import { z } from "zod";

export const statusSchema = z.object({
	title: z.string(),
	description: z.string(),
});

export const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	status: z.enum(["in progress", "todo", "done"]).default("todo"),
	createdAt: z.string().default(() => new Date().toISOString()),
	updatedAt: z.string().default(() => new Date().toISOString()),
});
