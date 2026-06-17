import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { useNavigate } from 'react-router-dom';
import aboutImage from '../assets/images/about-cover.jpg';
import '../pages/About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="about-page container fade-in">
        <div className="about-top-section mt-nav-offset">
          <img src={aboutImage} alt="FitCare Mission" className="about-img" />
          <div className="about-intro">
            <h2>Welcome to FitCare</h2>
            <p>
              FitCare is your AI-powered fitness companion, designed to transform how you train, eat, and grow.
              We blend science, technology, and personalization into one powerful platform. Whether you're a beginner
              looking to get started or a seasoned athlete pushing your limits, FitCare adapts to you — not the other way around.
            </p>
            <p>
              From intelligent diet recommendations and personalized music playlists to smart challenges and fitness quizzes,
              every tool you need to stay motivated, consistent, and in control is at your fingertips.
              Built with passion, driven by AI, and powered by a community — FitCare is more than a fitness app. It’s a lifestyle.
            </p>
          </div>
        </div>

        <div className="about-sections">
          <div className="about-box">
            <h3>🎯 Our Mission</h3>
            <p>
              To transform every user’s fitness journey by removing guesswork, building consistency, and offering tailored
              AI-based insights that drive real results. We believe in empowering people with data, motivation, and clarity
              to take charge of their wellness.
            </p>
          </div>
          <div className="about-box">
            <h3>📌 Our Objective</h3>
            <p>
              FitCare brings together personalized plans, expert guidance, smart analytics, and intuitive tools under one platform.
              Our goal is to serve millions of users with a system that continuously learns and adapts to their progress and preferences.
            </p>
          </div>
          <div className="about-box">
            <h3>🕰 Our History</h3>
            <p>
              Founded in early 2025, FitCare was conceptualized by a team of developers and fitness enthusiasts who saw the
              disconnect between goals and real-time support. What started as a passion project is now an AI-driven wellness
              platform transforming lives.
            </p>
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="text-center mb-4">📅 FitCare Journey</h3>
          <ul className="timeline">
            <li>
              <span className="timeline-year">2025</span>
              <p>FitCare founded with the goal of blending fitness and technology.</p>
            </li>
            <li>
              <span className="timeline-year">2025 Q2</span>
              <p>Launched AI-based Diet & Challenge Modules.</p>
            </li>
            <li>
              <span className="timeline-year">2025 Q3</span>
              <p>Integrated Spotify and YouTube for dynamic music playlists.</p>
            </li>
            <li>
              <span className="timeline-year">2025 Q4</span>
              <p>Rolled out Quiz AI, Weekly Challenges, and Blog system.</p>
            </li>
            <li>
              <span className="timeline-year">Future</span>
              <p>More AI models, user dashboards, wearable sync, and community features.</p>
            </li>
          </ul>
        </div>
  
<div className="team-section text-center mt-5">
  <h3 className="mb-4">👥 Meet Our Team</h3>
  <div className="team-grid">
    <div className="team-card shadow">
      <h5>👨‍💻 Akash S</h5>
      <p><strong>Role:</strong> Full Stack Developer</p>
      <p><strong>Phone:</strong> +91 98765 43210</p>
    </div>
    <div className="team-card shadow">
      <h5>👨‍💻 Dharshan VS</h5>
      <p><strong>Role:</strong> UI/UX Designer</p>
      <p><strong>Phone:</strong> +91 87654 32109</p>
    </div>
    <div className="team-card shadow">
      <h5>👩‍💻 Dhanushya S</h5>
      <p><strong>Role:</strong> AI Model Engineer</p>
      <p><strong>Phone:</strong> +91 76543 21098</p>
    </div>
    <div className="team-card shadow">
      <h5>👨‍💻 Afsal M</h5>
      <p><strong>Role:</strong> Backend Developer</p>
      <p><strong>Phone:</strong> +91 65432 10987</p>
    </div>
  </div>
</div>

        <div className="text-center mt-5">
          <button className="home-btn" onClick={() => navigate('/')}>
            ⬅️ Back to Home
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;


