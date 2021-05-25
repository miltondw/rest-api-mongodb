import express from "express";
import TasksRoutes from "./routes/tasks.routes";
import morgan from "morgan";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(express.json());
app.use(morgan("dev"));
//Routes
app.get("/", (req, res) => {
  res.json({ message: "welcome my apllication" });
});
app.use("/api/tasks", TasksRoutes);

export default app;
