import heroImage from '../assets/images/hero-banner.jpg'; 
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <header className="hero-section position-relative">
      <img
        src={heroImage}
        alt="FitCare Hero"
        className="img-fluid w-100"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />

      <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold">Transform Your Body, Mind & Health</h1>
        <p className="lead mt-3">AI-powered plans, personalized workouts, and smart nutrition—just for you.</p>
        <Link to="/diet" className="btn btn-primary btn-lg mt-3">Get Your AI Plan</Link>
      </div>

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
      ></div>
    </header>
  );
};

export default HeroSection;
