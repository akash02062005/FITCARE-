const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendConfirmationEmail = require('../utils/mailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newEntry = new Contact({ name, email, message });
    await newEntry.save();

    await sendConfirmationEmail(email, name);

    res.json({ success: true });
  } catch (err) {
    console.error('❌ Error in contact form:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

module.exports = router;

