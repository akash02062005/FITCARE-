const mongoose = require('mongoose');
const musicSchema = new mongoose.Schema({
  mood: String,
  tracks: [
    {
      title: String,
      link: String
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Music', musicSchema);
