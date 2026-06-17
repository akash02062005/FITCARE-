const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const fitnessTypes = [
  "🔥 HIIT Hero: Thrives on intense, short workouts.",
  "💪 Strength Sentinel: Lifts heavy and recovers smart.",
  "🧘 Mindful Mover: Embraces flow and mindfulness.",
  "🏃‍♂️ Cardio Conqueror: Loves to run, bike, and move fast.",
  "🧠 Neurofit Nomad: Smart training and recovery balance.",
  "🧘 Zen Champion: Finds strength through calm and stretch.",
  "🎯 Precision Performer: Tracks every move with accuracy.",
  "💥 Explosive Energizer: Sprints, jumps, and powers through.",
  "🦾 Muscle Maverick: Bodybuilding focused and goal-driven.",
  "🌱 Functional Fighter: Moves smart, agile, and pain-free.",
  "🏕️ Outdoor Nomad: Loves nature-based movement.",
  "⚡ Metcon Magician: CrossFit-style fast burners.",
  "🌀 Balance Beast: Stability and posture driven.",
  "🥇 Elite Performer: You thrive on intensity and push boundaries.",
  "🚴 Power Cycler: Endurance and leg-focused efficiency.",
  "🏋️ Gym Gladiator: Traditional weights and structure.",
  "🎵 Rhythm Ripper: Moves best to beats and tempo.",
  "🥋 Recovery Guru: Rest, sleep, and stretch as weapons.",
  "🏹 Core Commander: All about the abs and posture.",
  "🪄 Form Freak: Precise, clean technique matters most.",
  "🪶 Mobility Magician: Smooth transitions and supple joints.",
  "🧗 Agility Artist: Quick, light, and always ready.",
  "🎭 Hybrid Hero: Combines everything with intelligence.",
  "🫀 Endurance Explorer: Long runs, long rides, long burn.",
  "🌊 Flow Architect: Yoga, pilates, and elegant movement.",
  "🎽 Sprint Strategist: Short burst speed and recovery master.",
  "📈 Strength Shaper: Periodized gains, structured lifts.",
  "🧬 BioSync Beast: Data-based optimization and smart tech.",
  "💃 Flexibility Fox: Stretch, extend, reach — with grace.",
  "🛡️ Beast Builder: Power, size, and progressive overload.",
  "🎯 Zone Zipper: Heart-rate based optimization.",
  "🧊 Cold Recovery Ninja: Ice baths, breathwork, and control.",
  "🌀 Pulse Pumper: Loves to get that heart racing daily.",
  "🧰 Toolbox Trainer: Has everything in the toolkit.",
  "🧠 Cognitive Cycler: Brain + body — always aligned.",
  "🔥 Shred Strategist: Low body fat, high output.",
  "🛸 AI Athlete: Personalized, algorithm-tuned fitness path.",
  "🚦 Speed Seeker: Sprint, HIIT, reaction-focused training.",
  "🎯 Discipline Dominator: Keeps structure and logs every set.",
  "📊 Metric Monster: Watches data over feelings."
];

const getRandomType = () => {
  return fitnessTypes[Math.floor(Math.random() * fitnessTypes.length)];
};

router.post('/submit', async (req, res) => {
  const { username, answers } = req.body;
  if (!username || !Array.isArray(answers)) return res.status(400).json({ error: 'Invalid data' });

  const result = getRandomType();

  try {
    const entry = new Quiz({ username, answers, result });
    await entry.save();
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: '❌ Failed to save quiz' });
  }
});
module.exports = router;