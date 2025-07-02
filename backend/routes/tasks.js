
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// ✅ GET all tasks (sorted by dueDate ascending)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ dueDate: 1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST: Create a task (accepts optional dueDate)
router.post('/', async (req, res) => {
  console.log("➡️ Incoming POST body:", req.body);

  const { title, dueDate } = req.body;

  if (!title) return res.status(400).json({ message: 'Title is required' });

  const task = new Task({
    title,
    dueDate: dueDate ? new Date(dueDate) : undefined,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(400).json({ message: err.message });
  }
});

// ✅ PUT: Update task (title, dueDate, or completed)
router.put('/:id', async (req, res) => {
  const { title, completed, dueDate } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: { title, completed, dueDate } },
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ✅ DELETE task
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
