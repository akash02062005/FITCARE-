const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.post('/create', async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Blog creation error:', error);
    res.status(500).json({ success: false, error: 'Server error occurred' });
  }
});

router.get('/all', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

module.exports = router;

