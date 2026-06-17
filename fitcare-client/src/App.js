import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DietAI from './pages/DietAI';
import MusicAI from './pages/MusicAI';
import QuizAI from './pages/QuizAI';
import ChallengeAI from './pages/ChallengeAI';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/global.css';

const AnimatedRoutes = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  return (
    <>
  
      {(path === '/music' || path === '/quiz') && (
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/diet" element={<DietAI />} />
          <Route path="/music" element={<MusicAI />} />
          <Route path="/quiz" element={<QuizAI />} />
          <Route path="/challenge" element={<ChallengeAI />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer />
    </Router>
  );
}

export default App;
