const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  description: String,
  category: String,
  dueDate: Date,
  completed: Boolean,
});
module.exports = mongoose.model('Task', taskSchema);
