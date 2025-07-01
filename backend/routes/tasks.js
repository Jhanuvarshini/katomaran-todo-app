// const express = require('express');
// const router = express.Router();
// const Task = require('../models/Task');

// // GET all tasks
// router.get('/', async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.json(tasks);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST create a task
// router.post('/', async (req, res) => {
//   const task = new Task({
//     title: req.body.title,
//   });

//   try {
//     const newTask = await task.save();
//     res.status(201).json(newTask);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // PUT update task by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.json(updatedTask);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // DELETE task
// router.delete('/:id', async (req, res) => {
//   try {
//     await Task.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Task deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// ✅ GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST create a task
router.post('/', async (req, res) => {
  console.log("➡️ Incoming POST body:", req.body);  // Log incoming body

  const task = new Task({
    title: req.body.title,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error("❌ Save error:", err);  // Log exact error
    res.status(400).json({ message: err.message });
  }
});

// ✅ PUT update task by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
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

