import Task from "../models/Task";
import { getPagination } from "../libs/getPagination";
const ctrlTask = {};

ctrlTask.findAllTasks = async (req, res) => {
  try {
    const { page, size, title } = req.query;
    const search = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};
    const { offset, limit } = getPagination(page, size);
    const data = await Task.paginate(search, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPage: data.totalPage,
      currentPage: data.page - 1,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "something goes wrong retrieving the tasks",
    });
  }
};
ctrlTask.findAllDoneTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (err) {
    res.status(404).json({
      message: err.message || `Not finished Task`,
    });
  }
};
ctrlTask.findOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task)
      return res
        .status(404)
        .json({ message: `Task with id : ${id} does not exists` });

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message || `Error retrieving Task with id: ${id}`,
    });
  }
};
ctrlTask.createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Content cannot be empty" });
  }
  try {
    const { title, description, done } = req.body;
    const newTask = new Task({ title, description, done: done ? done : false });
    await newTask.save();
    res.json({ message: "saving a new Task" });
  } catch (err) {
    res.status(500).json({
      message: err.message || "something goes wrong creting the task",
    });
  }
};
ctrlTask.updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndUpdate(id, req.body);
    res.json({ message: "Task Updated" });
  } catch (err) {
    res.status(500).json({
      message: err.message || `Cannot updated Task with id: ${id}`,
    });
  }
};
ctrlTask.deleleTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task Deleted" });
  } catch (err) {
    res.status(500).json({
      message: err.message || `Cannot delete Task with id: ${id}`,
    });
  }
};

export default ctrlTask;
