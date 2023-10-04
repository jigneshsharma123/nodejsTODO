const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db')
const Task = require('./models/Task');
// const updatelist = require('./routes/updateList')
// const deleteTaskRoute = require('./routes/deleteTask');

const port = 4000;


// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const addTaskRoute = require('./routes/addTask');

app.use('/add-task', addTaskRoute);

// app.use('/update-task/:id', updatelist);
app.post('/delete-task', async (req, res) => {
  try {
    const taskIds = req.body.taskCompleted;
    if (taskIds && taskIds.length > 0) {
      await Task.deleteMany({ _id: { $in: taskIds } });
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', async (req, res) => {
    try {
      const tasks = await Task.find(); // Fetch all tasks from the database
      res.render('home', { title: 'Todo App', tasks: tasks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
