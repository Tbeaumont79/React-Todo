import { z } from "zod";

export const taskInput = z.object({
    title: z.string(),
    description: z.string(),
});