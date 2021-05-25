import Task from "../models/Task";
const ctrlTask = {};

ctrlTask.findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
ctrlTask.findAllDoneTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};
ctrlTask.findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};
ctrlTask.createTask = async (req, res) => {
  const { title, description, done } = req.body;
  const newTask = new Task({ title, description, done: done ? done : false });
  await newTask.save();
  res.json({ message: "saving a new Task" });
};
ctrlTask.updateTask = async (req, res) => {
  await Task.findOneAndUpdate(req.params.id, req.body);
  res.json({ message: "Task Updated" });
};
ctrlTask.deleleTask = async (req, res) => {
  await Task.findOneAndDelete(req.params.id);
  res.json({ message: "Task Deleted" });
};

export default ctrlTask;
