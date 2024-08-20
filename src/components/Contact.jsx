import React from 'react';
import '../styles/Contact.css';
import resume from '../assets/Sajith_Pradeep_Resume.pdf'; 
import contactIcon from "../assets/icons/contacts.png";

const Contact = () => {
  return (
    <div>
      <section id="contact-title">
      <h2>Let's Build Some Products Together! </h2>
      <img src={contactIcon} alt="HTML5" style={{ width: '80px', height: '80px' }} />
      </section>
    <section id="contact">
      <p>Got a product idea brewing? Or a problem that’s keeping you up at night?</p>
       <p>  I’m all ears! Whether it’s a quick chat or a deep dive into brainstorming, I’m always up for a coffee-fueled session to solve some problems and talk shop about all things product. Reach out, and let’s make something awesome happen!</p>
      <p>Email: <a href="mailto:[Your Email]">sajith.pradeep1993@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/sajith-pradeep-87b98bb5/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/sajith-pradeep-87b98bb5/</a></p>
      <p>Mobile: <a href="tel:+917736305685" class="phone-link">+91-7736305685</a></p>
      <div>
        <a href={resume} download="SajithPradeep_Resume.pdf" className="download-button">
                  Download My Resume
        </a>
      </div>
    </section>
    </div>
  );
};

export default Contact;
