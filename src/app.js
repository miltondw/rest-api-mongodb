import express from "express";
import TasksRoutes from "./routes/tasks.routes";
const app = express();

//Variables
app.set("port", process.env.PORT || 3000);

//Routes
app.get("/", (req, res) => {
  res.json({ message: "welcome my apllication" });
});
app.use("/api/tasks", TasksRoutes);

export default app;
