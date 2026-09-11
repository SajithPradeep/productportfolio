import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data/site';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.role} · {profile.location}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer__links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`tel:${profile.phoneHref}`}>Phone</a>
        </div>
      </div>

      <div className="wrap footer__base">
        <p>&copy; {year} {profile.name}</p>
        <p>
          Built with React.{' '}
          <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">
            Icons from Flaticon
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
