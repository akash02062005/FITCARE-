import { useState } from 'react';

const StepCounter = () => {
  const [steps, setSteps] = useState('');
  const [calories, setCalories] = useState(null);

  const handleCalculate = () => {
    if (!steps || isNaN(steps)) {
      alert('Please enter a valid number of steps.');
      return;
    }
    const cal = (Number(steps) * 0.04).toFixed(2); 
    setCalories(cal);
  };

  return (
    <div className="step-counter-box">
      <label htmlFor="steps">Enter your step count:</label>
      <input
        type="number"
        id="steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="form-control my-2"
        placeholder="e.g., 5000"
      />
      <button onClick={handleCalculate} className="btn btn-primary mb-3">
        Calculate Calories Burned
      </button>
      {calories && (
        <div className="alert alert-success">
          You burned approximately <strong>{calories} kcal</strong>
        </div>
      )}
    </div>
  );
};

export default StepCounter;
