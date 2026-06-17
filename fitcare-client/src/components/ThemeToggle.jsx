import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="btn btn-sm position-fixed"
    style={{ bottom: '30px', left: '30px', zIndex: 1000 }}
    aria-label="Toggle Theme"
  >
    {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
  </button>
);

export default ThemeToggle;
