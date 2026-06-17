import React, { useState } from 'react';
import './QuizForm.css';

const questions = [
  "How do you feel after intense workouts?",
  "What's your preferred workout environment?",
  "Which time of day do you enjoy exercising?",
  "Do you like routines or variety?",
  "How long are your typical workouts?",
  "What's your main fitness goal?",
  "Do you prefer team or solo activities?",
  "How do you recover after workouts?",
  "What motivates you the most?",
  "How do you track your progress?"
];

const options = [
  ["A. Energized", "B. Calm", "C. Strong", "D. Tired but fulfilled"],
  ["A. Gym", "B. Yoga studio", "C. Home with weights", "D. Outdoors"],
  ["A. Early morning", "B. Evening", "C. Afternoon", "D. Any time"],
  ["A. Variety", "B. Routine", "C. Challenge", "D. Adventure"],
  ["A. < 30 mins", "B. 30-60 mins", "C. 1+ hour", "D. Flexible"],
  ["A. Fat Burn", "B. Flexibility", "C. Muscle Gain", "D. Endurance"],
  ["A. Solo", "B. Class-based", "C. Training partner", "D. Group sports"],
  ["A. Cold shower", "B. Meditation", "C. Protein shake", "D. Stretching"],
  ["A. Progress", "B. Mindfulness", "C. Power", "D. Exploration"],
  ["A. Fitness tracker", "B. Journal", "C. Weightlifting log", "D. Feelings"]
];

const QuizForm = () => {
  const [answers, setAnswers] = useState(Array(10).fill(''));
  const [username, setUsername] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelect = (qIndex, value) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answers.includes('') || !username.trim()) {
      alert("Please answer all questions and enter your name.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/quiz/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, answers })
});


      const data = await response.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
    setLoading(false);
  };

  const progress = Math.round((answers.filter(Boolean).length / 10) * 100);

  return (
    <form onSubmit={handleSubmit} className="quiz-form-wrapper">
      <div className="progress mb-4 mx-auto">
        <div
          className="progress-bar bg-success"
          style={{ width: `${progress}%` }}
          role="progressbar"
        />
      </div>

      <div className="name-section">
        <label className="quiz-name-label">Your Name</label>
        <input
          type="text"
          className="form-control quiz-name-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      {questions.map((q, index) => (
        <section key={index} className="question-card">
          <h5 className="mb-3">{index + 1}. {q}</h5>
          <div className="d-flex flex-column align-items-center gap-3">
            {options[index].map((opt, i) => (
              <div className="form-check text-start w-100" style={{ maxWidth: '500px' }} key={i}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={`q${index}`}
                  id={`q${index}opt${i}`}
                  value={opt.charAt(0)}
                  checked={answers[index] === opt.charAt(0)}
                  onChange={() => handleSelect(index, opt.charAt(0))}
                />
                <label className="form-check-label ms-2" htmlFor={`q${index}opt${i}`}>
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="quiz-submit-container">
  <button type="submit" className="quiz-submit-button">
    Submit Quiz
  </button>
</div>

      {loading && <p className="text-center text-info mt-3">Calculating your AI fitness result...</p>}
      {result && (
        <div className="alert alert-success mt-5 text-center mx-auto" style={{ maxWidth: '700px' }}>
          <h5 className="fw-bold">🎯 Your AI Fitness Type</h5>
          <p>{result}</p>
        </div>
      )}
    </form>
  );
};

export default QuizForm;
