import React, { useState } from 'react';
import './ChallengeList.css';

const challenges = [
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
    title: "😴 Sleep Optimization",
    content: [
      "Aim for 8 hours sleep daily.",
      "Track with an app or journal.",
      "Maintain routine."
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

const ChallengeList = () => {
  const [expanded, setExpanded] = useState({});
  const [user, setUser] = useState({ name: '', goal: '', level: '' });
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/challenge/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      });

      const data = await res.json();
      if (data.success) {
        setSelectedChallenge(data.challenge);
        setUser({ name: '', goal: '', level: '' });
      } else {
        alert('Submission failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div className="challenge-container container py-5" style={{ marginTop: '100px' }}>
      <h2 className="text-center mb-4">🏆 Weekly AI Fitness Challenges</h2>

      <div className="challenge-grid">
        {challenges.map((item, index) => (
          <div key={index} className="challenge-card shadow-sm">
            <h5 className="challenge-title">{item.title}</h5>
            <p>{item.content[0]}</p>
            {expanded[index] && item.content.slice(1).map((line, i) => (
              <p key={i} className="challenge-text">{line}</p>
            ))}
            <button
              className="read-more-btn"
              onClick={() => toggleReadMore(index)}
            >
              {expanded[index] ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {/* Challenge Form */}
      <form onSubmit={handleSubmit} className="challenge-form mx-auto mt-5">
        <h4 className="text-center mb-4">🎯 Choose Your Challenge</h4>

        <div className="form-group mb-3">
          <label>Your Name:</label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label>Fitness Goal:</label>
          <select
            className="form-control"
            value={user.goal}
            onChange={(e) => setUser({ ...user, goal: e.target.value })}
            required
          >
            <option value="">Select a goal</option>
            <option>Fat Loss</option>
            <option>Muscle Gain</option>
            <option>Endurance</option>
            <option>Mobility</option>
            <option>Stress Relief</option>
          </select>
        </div>

        <div className="form-group mb-3">
          <label>Experience Level:</label>
          <div className="d-flex gap-4 flex-wrap">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <div key={lvl}>
                <input
                  type="radio"
                  id={lvl}
                  name="level"
                  value={lvl}
                  className="me-1"
                  checked={user.level === lvl}
                  onChange={(e) => setUser({ ...user, level: e.target.value })}
                />
                <label htmlFor={lvl}>{lvl}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary btn-lg px-5">
            Get My Challenge
          </button>
        </div>
      </form>

      {selectedChallenge && selectedChallenge.content && (
        <div className="selected-challenge-box text-center mx-auto mt-5">
          <h2 className="fw-bold mb-3">🎉 Your AI Challenge</h2>
          <h4 className="text-primary mb-3">{selectedChallenge.title}</h4>
          <div className="challenge-content-box">
            {selectedChallenge.content.map((line, index) => (
              <p key={index} className="challenge-line">{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeList;
