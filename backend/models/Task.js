

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    default: () => {
      // Default due date is today at 11:59 PM
      const now = new Date();
      now.setHours(23, 59, 59, 999);
      return now;
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Task', taskSchema);

