const mongoose = require('mongoose');

const DietSchema = new mongoose.Schema({
  age: Number,
  gender: String,
  goal: String,
  preference: String,
  allergies: String,
  plan: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Diet', DietSchema);


