import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import ChallengeList from '../components/ChallengeList';


const ChallengeAI = () => {
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('');
  const [frequency, setFrequency] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!goal || !level || !frequency) return alert("Please fill all fields!");

    try {
      const res = await fetch('http://localhost:5000/api/challenges/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal, level, frequency })
      });
      const data = await res.json();
      if (data.recommended) {
        setRecommendation(data.recommended);
        setSubmitted(true);
      } else {
        alert("❌ Something went wrong.");
      }
    } catch (err) {
      alert("❌ Server error.");
    }
  };

  return (
    <PageWrapper>
      <div className="container py-5 text-center">
        <ChallengeList />
        {submitted && (
          <div className="alert alert-info mt-4 mx-auto" style={{ maxWidth: '600px' }}>
            <strong>🎉 AI Recommends:</strong><br /> {recommendation}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default ChallengeAI;



