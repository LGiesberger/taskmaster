const { Schema } = require('mongoose');
const mongoose = require('../db');

const taskSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  date: { type: Date, required: true },
  numericalDate: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
