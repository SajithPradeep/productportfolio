import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <div>
      <section id="about-title">
        <h2>About Me</h2>
      </section>
    <section id="about">
      <img src={aboutImage} alt="About Me" style={{ width: 'auto', maxWidth: '400px', height: '350px' }} />
      <p>I am a Product manager and experienced business analyst working with cross-functional teams at Deloitte Studios, where I focus on developing client products, with a strong emphasis on user experience and customer satisfaction. My role bridges business, technology, and design to create products that are both appealing to the end users and aligned with the client's business objectives. I have collaborated with numerous clients across diverse industries, developing front-end applications for web and mobile (iOS and Android) platforms. Additionally, I work closely with design teams to craft solutions that address user pain points while maintaining a high-quality user experience.</p>
      <p>Additionally, I also have expertise in Frontend web development, which has helped me understand the technical side of the product and enabled me to work closely with the Development and QA team. This has also helped me while providing design feedback by bringing the tech feasibility angle also into the picture. </p>
    </section>
    </div>
  );
};

export default About;
