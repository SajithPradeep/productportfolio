// src/components/SkillCard.jsx
import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = ({ title, overview, skills, iconName }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <img src={iconName} alt="HTML5" style={{ width: '40px', height: '40px' }} />
      <p class="skill-description">{overview}</p>
      <p class="skill-list">{skills}</p>
    </div>
  );
};

export default SkillCard;
