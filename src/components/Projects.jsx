import React, { useState } from 'react';
import '../styles/Projects.css';
import workExperience from "../assets/icons/work-experience.png"

const ProjectAccordionItem = ({ title, orgDate,  children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <h5>Role: {orgDate}</h5>
        <section class="seeDetails">
          <span class="desktop">{isOpen ? '-' : '+'}</span>
          <span class="responsive">{isOpen ? '' : 'Tap to see Details'}</span>
        </section>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
      <span onClick={toggleAccordion} class="responsive responsiveDown">{isOpen ? 'See Less' : ''}</span>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <section id="project-title">
      <h2>Projects</h2>
      <img src={workExperience} alt="HTML5" style={{ width: '100px', height: '100px' }} />
      </section>
    <section id="projects">
      <div className="accordion">
        <ProjectAccordionItem title="Blood Glucose and Insulin tracking Class 2 SAMD app for an American Pharmaceutical client" orgDate="Product Manager, Deloitte Consulting">
          <p>
            <ul>
              <li>The client planned to release a new drug designed for weekly insulin doses.</li>
              <li>The objective was to adapt existing application designs to accommodate this new dosing regimen.</li>
              <li>Facilitated a comprehensive discovery workshop to pinpoint user pain points and identify limitations in the current applications, resulting in an empathy map and a high-level feature list for wireframing.</li>
              <li>Engaged in brainstorming sessions with the design team to create wireframes and high-fidelity designs, incorporating insights from the discovery workshop.</li>
              <li>Developed user stories, detailed functional flows, and logic diagrams to support the designs, successfully completing the project within a tight 2-month timeframe.</li>
            </ul>          
            </p>
        </ProjectAccordionItem>
        <ProjectAccordionItem title="Day of Travel application for an American Domestic Airlines client" orgDate="Product Manager, Deloitte Consulting">
          <p>
            <ul>          
              <li>The airline sought Deloitte's help to streamline travel time, enhance customer experience, and reduce boarding delays.</li>
              <li>Conducted research on airline operations and user boarding processes, defining the KPI as reducing the time from home departure to flight boarding. Metrics included total time from home to airport and from airport entry to boarding gate.</li>
              <li>Developed a "Day of Travel" app to provide timely reminders based on traffic conditions via Google Maps integration, and offer transport options, including car rentals, with parking guidance and geo-fencing for airport entry.</li>
              <li>The app also included internal navigation to assist users through check-in, security, and to the boarding gate.</li>
              <li>Created an MVP and began initial UAT testing, but the project was halted due to budget constraints imposed by the COVID-19 pandemic.</li>
            </ul>
          </p>
        </ProjectAccordionItem>
        <ProjectAccordionItem title="Salesforce tool for asset maintenance" orgDate="Product Manager, Deloitte Consulting">
          <p>
          <ul>
            <li>Developed an internal Salesforce tool for asset maintenance across locations.</li>
            <li>KPI: Identify at-risk assets before failure and enable remediation.</li>
            <li>Used asset performance history to measure failure rates and created Salesforce dashboards for easy access to asset information.</li>
          </ul>
          </p>
        </ProjectAccordionItem>
        <ProjectAccordionItem title="Business Analyst project summary" orgDate="Business Analyst, Deloitte Consulting">
          <p>
          <ul>
            <li>As a Business Analyst, I’ve worked with clients across diverse industries, including Life Sciences, Healthcare, Retail, Manufacturing, and Customer Support.</li>
            <li>I’ve also served as a Scrum Master, ensuring AGILE processes like sprint planning, demos, standups, and retrospectives are followed to deliver projects on time.</li>
            <li>My role involved detailed interactions with client stakeholders to document requirements, which were then used to create user stories for design and development.</li>
            <li>I also created user flow and logic diagrams to clarify requirements during sprint planning and support development and QA.</li>
            <li>Below are some notable client projects from my experience as a Business Analyst:
              <ul>
                <li>Creating a customer support web portal for an <b>American Computer manufacturer client</b>. Worked with the client Product Owner to understand the new functionalities and created detailed user stories to aid in the development process.</li>
                <li>Creating a patient companion application for an <b>American Pharmaceutical client</b>. The patient companion application will help the patient to track their medication, give them timely reminders to take their medications, and also help the patients to refill the medications on time and track their symptoms.</li>
                <li>Also worked on creating a <b>Class 2 SAMD (Software As a Medical Device) application</b> for the same pharmaceutical client that will enable the user to monitor their blood glucose levels and insulin intake units on a daily basis and suggest changes to their dose based on the changes in the user's blood glucose readings, which are synced via Bluetooth using connected devices to the app.</li>
                <li>Worked on creating a customer loyalty app for an <b>American retail chain client</b> that provided various loyalty benefits to users in terms of reward points and personalized discounts, which in turn helps to drive more store visits.</li>
              </ul>
            </li>
          </ul>
          </p>
        </ProjectAccordionItem>
        <ProjectAccordionItem title="Employee portal for a multinational Oil and Natural gas client" orgDate="UX Designer and Frontend Dev, Wipro">
          <p>
          <ul>
            <li>Worked as a UX Designer and Front-End Engineer for a multinational oil and gas corporation, developing a section of their employee portal with a 5-month deadline.</li>
            <li>Collaborated with cross-functional stakeholders and the Product Owner to create wireframes using existing app components, streamlining the design process and avoiding the need for an additional designer.</li>
            <li>Developed front-end pages using React.js, HTML, CSS, and jQuery.</li>
            <li>Gained insights into high-level design processes and provided mentorship in front-end coding to team members.</li>
            <li>Faced challenges with scope creep as new requirements emerged, which eventually led to the project getting extended, highlighting the importance of rigorous planning and scope management for timely delivery.</li>
          </ul>
          </p>
        </ProjectAccordionItem>
        <ProjectAccordionItem title="Order fulfillment web portal for UK based retail chain" orgDate="Frontend Dev, Coffeebeans Consluting">
          <p>
          <ul>
            <li>Worked as a Frontend Engineer for a retail chain giant in the UK, enhancing their order fulfillment web portal.</li>
            <li>The major goal of this assignment was to improve delivery efficiency and optimize the order management system.</li>
            <li>The portal was also lacking the desired unit test coverage.</li>
            <li>Worked on implementing the requirements for the features and helped improve the coding standards by:
              <ul>
                <li>Implementing the latest React features.</li>
                <li>Successfully improving the overall code coverage by 20%.</li>
              </ul>
            </li>
          </ul>
          </p>
        </ProjectAccordionItem>
      </div>
    </section>
    </div>
  );
};

export default Projects;
