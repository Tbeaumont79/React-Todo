import express from "express";
import taskroutes from "./routes/taskRoutes";

const app = express();

app.use(express.json());
app.use("/tasks", taskroutes);

export default app;
