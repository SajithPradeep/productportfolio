import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import iconName from "../assets/portfolio.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={iconName} alt="Portfolio Icon" style={{ width: '40px', height: '40px' }} />
          <Link to="/">MyPortfolio</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* This is a hamburger menu icon */}
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Work Experience</Link>
          <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
