const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  name: String,
  goal: String,
  level: String,
  challenge: String,
  details: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Challenge', challengeSchema);


