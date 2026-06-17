const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');
const challenges = [
  {
    title: "😴 Sleep Optimization",
    content: [
      "Aim for 8 hours sleep daily.",
      "Track with an app or journal.",
      "Maintain routine."
    ]
  },
  {
    title: "🔥 HIIT Hero",
    content: [
      "20-min HIIT workouts 4x per week.",
      "Alternate between sprints and recovery.",
      "Track performance weekly."
    ]
  },
  {
    title: "🚶 10,000 Steps Daily",
    content: [
      "Walk 10,000 steps daily.",
      "Use a tracker to measure consistency.",
      "Boosts metabolism and recovery."
    ]
  },
  {
    title: "💪 Strength Builder",
    content: [
      "Train 5x a week with compound lifts.",
      "Log weights and progress weekly.",
      "Focus on form and rest."
    ]
  },
  {
    title: "🧘 Mindful Mornings",
    content: [
      "Start with breathwork + stretches.",
      "Reduces cortisol and tension.",
      "Enhances clarity and calm."
    ]
  },
  {
    title: "🍎 Clean Eating Reset",
    content: [
      "5 clean meals/day — no processed foods.",
      "Focus on protein, fiber, and hydration.",
      "Track digestion and energy."
    ]
  },
  {
    title: "🏃 Sprint Protocol",
    content: [
      "3 sprint sessions/week, 30s x 6 sets.",
      "Warm-up and cool-down mandatory.",
      "Increases power + VO2 max."
    ]
  },
  {
    title: "🧂 Hydration Mastery",
    content: [
      "3L water/day minimum.",
      "Add lemon + salt post-workout.",
      "Avoid sugary drinks."
    ]
  },
  {
    title: "🏋️ Gym Consistency",
    content: [
      "Workout 6 days this week.",
      "Split: push/pull/legs/cardio.",
      "Track sets and rest properly."
    ]
  },
  {
    title: "🧠 Focus & Recovery",
    content: [
      "Mobility + recovery-focused week.",
      "Foam rolling, stretching, deep sleep.",
      "Mindful journaling included."
    ]
  }
];

router.post('/submit', async (req, res) => {
  const { name, goal, level } = req.body;
  if (!name || !goal || !level) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const selected = challenges[Math.floor(Math.random() * challenges.length)];

  try {
    const newEntry = new Challenge({
      name,
      goal,
      level,
      challenge: selected.title,
      details: selected.content
    });

    await newEntry.save();

    res.json({ success: true, challenge: selected });
  } catch (err) {
    console.error('❌ Challenge Save Error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;

