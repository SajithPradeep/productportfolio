import React from 'react';
import '../styles/Home.css';
import '../styles/SkillCard.css'; // Import the SkillCard CSS
import SkillCard from './SkillCard'; // Import the SkillCard component
import productManagement from "../assets/icons/product-management.png";
import businessAnalyst from "../assets/icons/data-analysis.png";
import scrumMaster from "../assets/icons/scrum.png";
import frontendEngineer from "../assets/icons/ui-design.png";
import resume from '../assets/Sajith_Pradeep_Resume.pdf'; 
import aboutImage from '../assets/about.jpg';


const Home = () => {
  return (
    <div>
      <section id="home">
      <img src={aboutImage} alt="HTML5" style={{ width: 'auto', maxWidth: '400px', height: '250px', borderRadius: '50%' }} />
      <h1>Sajith Pradeep</h1>
      <p class="roles">Product Manager | Business Analyst | Frontend developer</p>
      <p class="role-description">Product manager and experienced Business analyst, specialized in building Front end web and mobile applications for iOS and Android devices, looking out for opportunities to design and build cutting-edge products.</p>
      <div className="download-button-home">
        <a href={resume} download="SajithPradeep_Resume.pdf">
            Download My Resume
        </a>
      </div>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <div className="skill-container">
          <SkillCard
            title="Product Management"
            overview="Created the Product Strategy, defined the KPIs and metrics for client projects and internal tools and assets. Worked with the design team to create wireframes and high fidelity designs for the development process."
            skills="Creating product strategies, Defining KPIs and metrics, Collaborating with design teams, Creating wireframes, High-fidelity designs, Feature prioritization, Release planning, Product Requirements Document"
            iconName = {productManagement}
          />
          <SkillCard
            title="Business Analyst"
            overview="Worked with multiple client Product owners across different industries to build web and mobile applications. Worked with cross-functional teams to understand and document the requirements and supported the QA team during UAT."
            skills="Documenting requirements, Creating user stories, Managing product backlogs, Detailed interaction with stakeholders, User flow and logic diagrams, Business Requirements Documentation"
            iconName = {businessAnalyst}
          />
          <SkillCard
            title="Agile Scrum Master"
            overview="Worked as the scrum master on multiple projects to ensure that the AGILE processes and ceremonies are carried out and the project timelines for development are met."
            skills="Sprint planning, Demos, Standups, Retrospectives, Ensuring adherence to Agile practices, Delivering projects on time, Software Development Life Cycle (SDLC), Capacity planning"
            iconName = {scrumMaster}
          />
          <SkillCard
            title="Frontend Developer"
            overview="Designing and implementing user interfaces for web applications. Worked with multiple clients from different industries like Banking, Retail, e-commerce, Healthcare etc. "
            skills="React, HTML, CSS, JavaScript, Responsive design, Git, Postman, Node.JS"
            iconName = {frontendEngineer}
          />
        </div>
      </section>

    </div>
    
  );
};

export default Home;
