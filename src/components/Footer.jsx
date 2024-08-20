import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Sajith Pradeep. All rights reserved.</p>
      <div class="contact-list">
        <p><a href="mailto:sajith.pradeep1993@gmail.com">E-mail</a></p>
        <p><a href="https://www.linkedin.com/in/sajith-pradeep-87b98bb5/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p> <a href="tel:+917736305685" class="phone-link">Mobile</a></p>
      </div>
      <div class="reference-icon">
      <a href="https://www.flaticon.com/free-icon/" title="worker icons">All icons borrowed from Flaticon</a>
      </div>
    </footer>
  );
};

export default Footer;