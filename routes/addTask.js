const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.post('/', async (req, res) => {
  try {
    const { taskDescription, category, dueDate } = req.body;
    const task = new Task({
      description: taskDescription,
      category,
      dueDate,
      completed: false, // Initialize as not completed
    });
    await task.save();
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
