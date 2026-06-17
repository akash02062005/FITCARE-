import { useState } from 'react';

const BMIForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const h = height / 100;
    const result = (weight / (h * h)).toFixed(2);
    setBmi(result);

    if (result < 18.5) setStatus('Underweight');
    else if (result < 24.9) setStatus('Normal weight');
    else if (result < 29.9) setStatus('Overweight');
    else setStatus('Obese');
  };

  return (
    <div className="card shadow p-4">
      <h4 className="text-center mb-3">BMI Calculator</h4>
      <form onSubmit={calculateBMI}>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Calculate</button>
      </form>
      {bmi && (
        <div className="mt-4 text-center">
          <h5>Your BMI: {bmi}</h5>
          <p>Status: <strong>{status}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMIForm;
