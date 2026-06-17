import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import PlaylistGenerator from '../components/PlaylistGenerator';
import '../pages/MusicAI.css';

const MusicAI = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'music-dark' : 'music-light';
  }, [darkMode]);

  return (
    <PageWrapper>
      <div className="music-page">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        <div className="container text-center music-content">
          <h2 className="section-title">🎧 AI Music Recommendation</h2>
          <p className="section-subtext">Select your workout mood to get a personalized playlist instantly.</p>
          <PlaylistGenerator />
        </div>
      </div>
    </PageWrapper>
  );
};

export default MusicAI;
