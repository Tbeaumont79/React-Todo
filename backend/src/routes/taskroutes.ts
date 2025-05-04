import { taskStore } from "../models/taskstore";
import { taskInput } from "../schema/tasks";
import express from "express";

const router = express.Router();

router.get("/tasks", (req, res) => {
    res.json(taskStore.getAll());
});

router.post("/tasks", (req, res) => {
    const task = taskStore.add(req.body);
    res.json(task);
});

router.put("tasks/:id", (req, res) => {
    const validateData = taskInput.safeParse(req.body);
    if (!validateData.success) {
        res.status(400).json(validateData.error);
        return;
    }
    const task = taskStore.updateStatus(req.params.id, req.body.status);
    res.json(task);
});

router.delete("/tasks/:id", (req, res) => {
    const result = taskStore.delete(req.params.id);
    res.json(result);
});

export default router;