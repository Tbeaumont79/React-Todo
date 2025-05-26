import { z } from "zod";

export const todoSchema = z.object({
	title: z
		.string()
		.min(3, "Le titre doit contenir au moins 3 caractères")
		.max(50, "Le titre ne doit pas dépasser 50 caractères"),
	description: z.string().optional(),
	status: z.string(),
});

export type TodoInput = z.infer<typeof todoSchema>;
