import React from 'react';
import Navbar from '../components/Navbar';
import heroImage from '../assets/images/hero-banner.jpg';
import dietIcon from '../assets/images/diet-icon.png';
import musicIcon from '../assets/images/music-icon.png';
import quizIcon from '../assets/images/quiz-icon.png';
import BMIForm from '../components/BMIForm';
import StepCounter from '../components/StepCounter';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section-home section-spaced">
        <div className="container">
          <div className="hero-row">
            <div className="hero-text">
              <h1>Empower Your Fitness Journey</h1>
              <p>Personalized plans, smart tools, and AI guidance — all in one platform.</p>
              <div className="hero-button-wrapper">
                <a href="/diet" className="btn btn-primary">Start My AI Plan</a>
              </div>
            </div>

            <div className="hero-image">
              <img src={heroImage} alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-slider-section section-spaced text-center">
        <div className="container">
          <h2 className="section-title mb-4">AI-Powered Fitness Tools</h2>
          <div className="feature-row">
            <div className="feature-card">
              <img src={dietIcon} alt="AI Diet Plan" />
              <h5>AI Diet Plan</h5>
              <p>Personalized nutrition plans powered by AI.</p>
              <a href="/diet" className="btn btn-outline-primary btn-sm">Explore</a>
            </div>
            <div className="feature-card">
              <img src={musicIcon} alt="Workout Music AI" />
              <h5>Workout Music AI</h5>
              <p>Boost your workouts with mood-based playlists.</p>
              <a href="/music" className="btn btn-outline-primary btn-sm">Explore</a>
            </div>
            <div className="feature-card">
              <img src={quizIcon} alt="Fitness Quiz" />
              <h5>Fitness Quiz</h5>
              <p>Discover your workout personality with AI.</p>
              <a href="/quiz" className="btn btn-outline-primary btn-sm">Explore</a>
            </div>
          </div>
        </div>
      </section>

      <section className="smart-tools-section section-spaced text-center bg-light">
        <div className="container">
          <h2 className="section-title mb-4">Smart Fitness Tools</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-6">
              <details className="tool-card">
                <summary className="tool-summary text-center">💡 Calculate Your BMI</summary>
                <div className="tool-box text-center">
                  <BMIForm />
                </div>
              </details>
              <details className="tool-card mt-4">
                <summary className="tool-summary text-center">🚶 Track Steps & Calories</summary>
                <div className="tool-box text-center">
                  <StepCounter />
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spaced text-center">
        <div className="container">
          <h2 className="section-title mb-4">From the Blog</h2>
          <div className="blog-grid">
            {[blog1, blog2, blog3].map((img, i) => (
              <div className="blog-card" key={i}>
                <img src={img} alt={`Blog ${i}`} />
                <div className="blog-content">
                  <h5>Fitness Tip #{i + 1}</h5>
                  <p>Learn how to improve your wellness through smart workouts and nutrition.</p>
                  <a href="/blog" className="text-primary">Read more →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spaced text-center bg-white">
        <div className="container">
          <h2 className="section-title mb-4">Fitspiration Gallery</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="gallery-swiper"
          >
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="gallery-slide-card">
                  <img src={img} alt={`Gallery ${i}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="cta-section section-spaced">
        <div className="cta-wrapper">
          <div className="text-center text-white">
            <h2 className="display-5 fw-bold">Ready to Take on a Challenge?</h2>
            <p className="lead mb-4">Join our weekly fitness goals and track your transformation with AI support.</p>
            <a href="/challenge" className="btn btn-light btn-lg">Explore Challenges</a>
          </div>
        </div>
      </section>

      <div className="footer-note text-center py-3 bg-light text-muted">
        © 2025 FitCare. All rights reserved.
      </div>
    </>
  );
};

export default Home;
