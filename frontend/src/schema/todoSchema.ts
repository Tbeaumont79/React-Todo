import { z } from "zod";

export const todoSchema = z.object({
	title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
	description: z.string().optional(),
});

export type TodoInput = z.infer<typeof todoSchema>;
