import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import QuizForm from '../components/QuizForm';
import '../pages/QuizAI.css';

const QuizAI = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'quiz-dark' : 'quiz-light';
  }, [darkMode]);

  return (
    <PageWrapper>
      <div className="quiz-page">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        <div className="container text-center quiz-header fade-in">
          <h2 className="display-5 fw-bold">🧠 Discover Your Fitness Personality</h2>
          <p className="lead fs-5 mt-3">
            Take our 10-question AI quiz and get your personalized fitness type.
          </p>
        </div>

        <div className="container fade-in">
          <QuizForm />
        </div>
      </div>
    </PageWrapper>
  );
};

export default QuizAI;




