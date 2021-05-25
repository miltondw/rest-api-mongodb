import express from "express";
import TasksRoutes from "./routes/tasks.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//middlewares
// app.use(cors({
//   origin:'http://localhost:4000/'
// }))
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.json({ message: "welcome my apllication" });
});
app.use("/api/tasks", TasksRoutes);

export default app;
