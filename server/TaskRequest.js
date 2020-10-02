const mongoose = require("mongoose");

function generateId() {
  return Math.random().toString(36).substring(7);
}

const TaskRequestSchema = mongoose.Schema({
  _id: {
    type: String,
    default: generateId,
  },
  task_type: String,
  task_title: String,
  task_description: String,
  task_date: String,
  choice_task: [String],
  gender: String,
  pet: String,
  sentence_task: String,
  require_master: String,
  reward: String,
  number_workers: String,
});

module.exports = mongoose.model("tasksrequest", TaskRequestSchema);
