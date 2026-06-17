import React, { useState } from 'react';

const DietForm = () => {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    goal: '',
    preference: '',
    allergies: ''
  });

  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const { age, gender, goal, preference } = form;
    if (!age || !gender || !goal || !preference) {
      alert('Please fill all required fields.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/diet/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (data.recommendation) {
        setRecommendation(data.recommendation);
      } else {
        setRecommendation('❌ No plan received. Check backend or input values.');
      }
    } catch (err) {
      console.error('❌ Error:', err);
      setRecommendation('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="diet-form-wrapper text-start">
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" name="age" value={form.age} onChange={handleChange} className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Select Gender</label>
          <select name="gender" value={form.gender} onChange={handleChange} className="form-select" required>
            <option value="">-- Choose --</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Fitness Goal</label>
          <select name="goal" value={form.goal} onChange={handleChange} className="form-select" required>
            <option value="">-- Choose --</option>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Maintenance</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Dietary Preference (e.g., Vegan, Keto)</label>
          <input
            type="text"
            name="preference"
            value={form.preference}
            onChange={handleChange}
            className="form-control"
            placeholder="Vegan, Keto, Indian, Mediterranean, etc."
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Any Allergies (optional)</label>
          <input
            type="text"
            name="allergies"
            value={form.allergies}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          {loading ? 'Loading...' : 'Get Your Diet Plan'}
        </button>
      </form>

   
      {recommendation && (
        <div className="alert alert-info mt-4" style={{ whiteSpace: 'pre-wrap' }}>
          <h5 className="fw-bold">Recommended Diet Plan:</h5>
          {recommendation}
        </div>
      )}
    </div>
  );
};

export default DietForm;

