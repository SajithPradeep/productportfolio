import React from 'react';
import '../styles/Home.css';
import '../styles/SkillCard.css'; // Import the SkillCard CSS
import SkillCard from './SkillCard'; // Import the SkillCard component

const Home = () => {
  return (
    <div>
      <section id="home">
      <h1>Sajith Pradeep</h1>
      {/* <img src={avatar} alt="Avatar" className="avatar" /> */}
      <p class="roles">Product Manager | Business Analyst | Frontend developer</p>
      <p class="role-description">Experienced Business analyst & Scrum master, specialized in building Front end web and mobile applications for iOS and Android devices, looking out for opportunities to design and build cutting-edge products.</p>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <div className="skill-container">
          <SkillCard
            title="Product Management"
            overview="Created the Product Strategy, defined the KPIs and metrics for client projects and internal tools and assets. Worked with the design team to create wireframes and high fidelity designs for the development process."
            skills="Creating product strategies, Defining KPIs and metrics, Collaborating with design teams, Creating wireframes, High-fidelity designs, Feature prioritization, Release planning, Product Requirements Document"
          />
          <SkillCard
            title="Business Analyst"
            overview="Worked with multiple client Product owners to build various web and mobile applications for both iOS and Android devices by working with cross-functional teams."
            skills="Documenting requirements, Creating user stories, Managing product backlogs, Detailed interaction with stakeholders, User flow and logic diagrams, Business Requirements Documentation"
          />
          <SkillCard
            title="Agile Scrum Master"
            overview="Worked as the scrum master on multiple projects to ensure that the AGILE processes and ceremonies are carried out and the project timelines for development are met."
            skills="Sprint planning, Demos, Standups, Retrospectives, Ensuring adherence to Agile practices, Delivering projects on time, Software Development Life Cycle (SDLC), Capacity planning"
          />
          <SkillCard
            title="Front End Developer"
            overview="Designing and implementing user interfaces for web applications."
            skills="React, HTML, CSS, JavaScript, Responsive design, Git, Postman, Node.JS"
          />
        </div>
      </section>

    </div>
    
  );
};

export default Home;
