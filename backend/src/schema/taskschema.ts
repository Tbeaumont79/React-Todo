import { z } from "zod";

export const taskInput = z.object({
	title: z.string(),
	description: z.string(),
});

export const task = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	status: z.enum(["TODO", "IN_PROGRESS", "DONE"]),
	createdAt: z.string(),
	updatedAt: z.string(),
});
