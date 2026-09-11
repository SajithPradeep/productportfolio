import React from 'react';
import { Link } from 'react-router-dom';
import { about, timeline, profile } from '../data/site';
import { useRevealGroup } from '../hooks/useReveal';
import portrait from '../assets/about.jpg';
import '../styles/About.css';

const About = () => {
  const bodyRef = useRevealGroup(0);
  const principlesRef = useRevealGroup(70);
  const timelineRef = useRevealGroup(60);

  return (
    <>
      <section className="section about-head">
        <div className="wrap about-head__inner">
          <div>
            <p className="eyebrow">{about.heading}</p>
            <h1 className="about-head__title">
              Engineer first, <span className="about-head__em">product second</span>.
            </h1>
          </div>
          <div className="about-head__portrait">
            <img src={portrait} alt={profile.name} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section about-body">
        <div className="wrap" ref={bodyRef}>
          <div className="about-prose reveal">
            {about.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? 'about-prose__lead' : undefined}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sunk">
        <div className="wrap" ref={principlesRef}>
          <header className="section-head reveal">
            <p className="eyebrow">How I work</p>
            <h2>Four things I keep coming back to</h2>
          </header>

          <div className="principles">
            {about.principles.map((p, i) => (
              <article className="principle reveal" key={p.title}>
                <span className="principle__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="principle__title">{p.title}</h3>
                <p className="principle__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" ref={timelineRef}>
          <header className="section-head reveal">
            <p className="eyebrow">Where I've worked</p>
            <h2>The path so far</h2>
          </header>

          <ol className="timeline">
            {timeline.map((item, i) => (
              <li className="timeline__item reveal" key={`${item.org}-${i}`}>
                <span className="timeline__dot" aria-hidden="true" />
                <div className="timeline__content">
                  <p className="timeline__period">{item.period}</p>
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__org">{item.org}</p>
                  <p className="timeline__note">{item.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="about-cta">
            <Link to="/work" className="btn btn--primary">See the case studies</Link>
            <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
