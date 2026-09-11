import React from 'react';
import { Link } from 'react-router-dom';
import { profile, intro, capabilities, aiFocus } from '../data/site';
import { featured } from '../data/caseStudies';
import { useRevealGroup } from '../hooks/useReveal';
import resume from '../assets/Sajith_Pradeep_Resume.pdf';
import portrait from '../assets/about.jpg';
import '../styles/Home.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
       strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
       strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15" />
  </svg>
);

const Home = () => {
  // All four sections mark their children with `.reveal`, so every one of these
  // needs the group hook — useReveal would tag the container instead.
  const heroRef = useRevealGroup(110);
  const capsRef = useRevealGroup(80);
  const workRef = useRevealGroup(90);
  const aiRef = useRevealGroup(0);

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="wrap hero__inner" ref={heroRef}>
          <div className="hero__text reveal">
            <p className="eyebrow">{profile.role}</p>
            <h1 className="hero__name">
              {profile.name}
            </h1>
            <p className="hero__tagline">{profile.tagline}</p>

            <div className="hero__intro">
              {intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="hero__actions">
              <Link to="/work" className="btn btn--primary">
                See the work <ArrowIcon />
              </Link>
              <a href={resume} download="SajithPradeep_Resume.pdf" className="btn btn--ghost">
                <DownloadIcon /> Résumé
              </a>
            </div>
          </div>

          <div className="hero__portrait reveal">
            <div className="hero__portrait-frame">
              <img src={portrait} alt={profile.name} loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- capabilities */}
      <section className="section section--sunk">
        <div className="wrap" ref={capsRef}>
          <header className="section-head reveal">
            <p className="eyebrow">What I do</p>
            <h2>Four things I'm genuinely good at</h2>
            <p className="lede">
              Rather than a list of tools, here's the work I'd want to be judged on.
            </p>
          </header>

          <div className="cap-grid">
            {capabilities.map((cap) => (
              <article className="cap card reveal" key={cap.title}>
                <h3 className="cap__title">{cap.title}</h3>
                <p className="cap__summary">{cap.summary}</p>
                <p className="cap__detail">{cap.detail}</p>
                <ul className="cap__skills">
                  {cap.skills.map((s) => (
                    <li key={s} className="tag">{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- featured work */}
      <section className="section">
        <div className="wrap" ref={workRef}>
          <header className="section-head reveal">
            <p className="eyebrow">Selected work</p>
            <h2>Three worth talking about</h2>
          </header>

          <div className="feature-grid">
            {featured.map((cs) => (
              <article className="feature card reveal" key={cs.id}>
                <div className="feature__meta">
                  <span className="tag tag--accent">{cs.industry}</span>
                  <span className="feature__period">{cs.period}</span>
                </div>
                <h3 className="feature__title">{cs.title}</h3>
                <p className="feature__summary">{cs.summary}</p>
                <div className="feature__foot">
                  <span className="feature__role">{cs.role} · {cs.org}</span>
                  <Link to="/work" className="feature__link">
                    Read the case study <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- ai / intent */}
      <section className="section section--sunk">
        <div className="wrap wrap--narrow ai" ref={aiRef}>
          <div className="reveal">
            <p className="eyebrow">{aiFocus.heading}</p>
            <p className="ai__body">{aiFocus.body}</p>

            {aiFocus.evidence.length > 0 && (
              <ul className="ai__evidence">
                {aiFocus.evidence.map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}</strong> {item.detail}
                  </li>
                ))}
              </ul>
            )}

            <div className="ai__cta">
              <Link to="/contact" className="btn btn--primary">
                Get in touch <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
