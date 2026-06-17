const mongoose = require('mongoose');
const QuizSchema = new mongoose.Schema({
  username: String,
  answers: [String],
  result: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', QuizSchema);

