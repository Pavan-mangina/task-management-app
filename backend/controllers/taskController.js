const Task = require("../models/Task")

exports.createTask = async (req, res) => {
  const task = new Task(req.body)
  await task.save()
  res.json(task)
}

exports.getTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

exports.getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id)
  res.json(task)
}

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body)
  res.json(task)
}

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)
  res.json({ message: "Deleted" })
}
