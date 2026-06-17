import React, { useState } from 'react';
import './PlaylistGenerator.css';

const PlaylistGenerator = () => {
  const [mood, setMood] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   const res = await fetch('http://localhost:5000/api/music/recommend', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ mood })
});

    const data = await res.json();
    setResults(data.recommendations || []);
  };

  return (
    <div className="playlist-generator">
      <form onSubmit={handleSubmit} className="music-form mb-4">
        <label className="form-label fw-bold fs-4">🎵 Choose Your Mood</label>
        <select
          className="form-select large-input mb-3"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          required
        >
          <option value="">-- Select Mood --</option>
          <option value="energetic">Energetic</option>
          <option value="calm">Calm</option>
          <option value="cardio">Cardio</option>
        </select>
        <button className="btn btn-lg btn-warning fw-bold">🎶 Generate Playlist</button>
      </form>

      <div className="music-cards-container">
        {results.map((track, index) => (
          <div key={index} className="music-card shadow">
            <h5 className="fs-5">{track.title}</h5>
            <a
              href={track.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mt-2"
            >
              ▶️ Play Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistGenerator;

