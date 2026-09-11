import React from 'react';
import { Link } from 'react-router-dom';
import {
  about, timeline, profile, sideProjects, certifications, education,
} from '../data/site';
import { useRevealGroup } from '../hooks/useReveal';
import portrait from '../assets/about.jpg';
import '../styles/About.css';

const About = () => {
  const bodyRef = useRevealGroup(0);
  const principlesRef = useRevealGroup(70);
  const timelineRef = useRevealGroup(60);
  const sideRef = useRevealGroup(70);

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

        </div>
      </section>

      {/* Side projects are the closest thing here to end-to-end ownership —
          built, shipped and iterated alone — so they earn a section. */}
      <section className="section section--sunk">
        <div className="wrap" ref={sideRef}>
          <header className="section-head reveal">
            <p className="eyebrow">Outside work</p>
            <h2>Things I build on my own time</h2>
            <p className="lede">
              Small full-stack apps, built with AI-assisted development. They are also
              the only products here where I own every decision.
            </p>
          </header>

          <div className="side-grid">
            {sideProjects.map((p) => (
              <article className="side card reveal" key={p.name}>
                <h3 className="side__name">{p.name}</h3>
                <p className="side__stack">{p.stack}</p>
                <p className="side__detail">{p.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="credentials">
            <div className="credentials__col">
              <h2 className="credentials__head">Certifications</h2>
              <ul className="credentials__list">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <span className="credentials__name">{c.name}</span>
                    <span className="credentials__meta">{c.issuer} · {c.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="credentials__col">
              <h2 className="credentials__head">Education</h2>
              <ul className="credentials__list">
                <li>
                  <span className="credentials__name">{education.degree}</span>
                  <span className="credentials__meta">
                    {education.institution} · {education.period}
                  </span>
                </li>
              </ul>
            </div>
          </div>

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
