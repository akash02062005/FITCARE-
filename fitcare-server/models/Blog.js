const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  date: String,
  category: String,
  tags: String,
  image: String,
  excerpt: String,
  content: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);

