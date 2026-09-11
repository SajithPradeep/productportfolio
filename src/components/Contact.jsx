import React from 'react';
import { profile } from '../data/site';
import { useRevealGroup } from '../hooks/useReveal';
import resume from '../assets/Sajith_Pradeep_Resume.pdf';
import '../styles/Contact.css';

const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.1 5.6a1.6 1.6 0 0 0 1.8 0L21 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm7 0h3.8v1.5h.05a4.2 4.2 0 0 1 3.77-2c4.03 0 4.78 2.5 4.78 5.9v5.6h-4v-5c0-1.2-.02-2.7-1.7-2.7-1.7 0-1.96 1.3-1.96 2.62v5.08h-4v-11Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
       strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4.5 19.5h15" />
  </svg>
);

const Contact = () => {
  const headRef = useRevealGroup(0);
  const cardsRef = useRevealGroup(80);

  const channels = [
    {
      icon: <MailIcon />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      note: 'Best for anything substantial. I reply within a day.',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      value: profile.linkedinLabel,
      href: profile.linkedin,
      external: true,
      note: 'Happy to connect — a note about why is always welcome.',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phoneHref}`,
      note: 'For when a conversation beats a thread.',
    },
  ];

  return (
    <>
      <section className="section contact-head">
        <div className="wrap wrap--narrow" ref={headRef}>
          <div className="reveal">
            <p className="eyebrow">Contact</p>
            <h1 className="contact-head__title">Let's build something measurable.</h1>
            <p className="lede contact-head__lede">
              Whether you're hiring, have a product problem worth chewing on, or just want
              to argue about what a good KPI looks like — I'm interested.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-body">
        <div className="wrap wrap--narrow" ref={cardsRef}>
          <div className="channels">
            {channels.map((c) => (
              <a
                key={c.label}
                className="channel card reveal"
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="channel__icon" aria-hidden="true">{c.icon}</span>
                <span className="channel__text">
                  <span className="channel__label">{c.label}</span>
                  <span className="channel__value">{c.value}</span>
                  <span className="channel__note">{c.note}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-resume reveal">
            <div>
              <h2 className="contact-resume__title">Prefer the short version?</h2>
              <p className="contact-resume__note">One page, no scrolling required.</p>
            </div>
            <a href={resume} download="SajithPradeep_Resume.pdf" className="btn btn--primary">
              <DownloadIcon /> Download résumé
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
