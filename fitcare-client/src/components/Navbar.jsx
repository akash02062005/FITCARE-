import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Diet', path: '/diet' },
    { name: 'Music', path: '/music' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Challenge', path: '/challenge' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="floating-navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">FitCare</Link>
      </div>
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    

    </nav>
    
  );
  
};

export default Navbar;

