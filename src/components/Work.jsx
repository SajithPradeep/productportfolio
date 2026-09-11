import React, { useMemo, useState } from 'react';
import { caseStudies, groups } from '../data/caseStudies';
import { useRevealGroup } from '../hooks/useReveal';
import '../styles/Work.css';

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const TIER_LABEL = {
  measured: 'Measured',
  modeled: 'Modelled',
  scope: 'Scope',
};

const CaseStudy = ({ study, defaultOpen }) => {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const panelId = `cs-panel-${study.id}`;

  return (
    <article className={`cs card reveal ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="cs__header"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <div className="cs__headline">
          <div className="cs__meta">
            <span className="tag tag--accent">{study.industry}</span>
            <span className={`cs__status cs__status--${study.status.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
              {study.status}
            </span>
          </div>
          <h3 className="cs__title">{study.title}</h3>
          <p className="cs__role">
            {study.role} · {study.org} · <span className="cs__period">{study.period}</span>
          </p>
          <p className="cs__summary">{study.summary}</p>
        </div>
        <span className="cs__toggle" aria-hidden="true">
          <ChevronIcon />
        </span>
      </button>

      {/* grid-template-rows 0fr -> 1fr animates height without measuring it.
          The inner wrapper flips to visibility:hidden when collapsed, which
          keeps its links out of the tab order without blocking the transition. */}
      <div className="cs__panel" id={panelId} role="region" aria-label={study.title}>
        <div className="cs__panel-inner">
          <div className="cs__divider" />

          {study.problem && (
            <section className="cs__block">
              <h4 className="cs__label">The problem</h4>
              <p>{study.problem}</p>
            </section>
          )}

          {study.approach?.length > 0 && (
            <section className="cs__block">
              <h4 className="cs__label">What I did</h4>
              <ul className="cs__list">
                {study.approach.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>
          )}

          {study.decisions?.length > 0 && (
            <section className="cs__block cs__block--accent">
              <h4 className="cs__label">Decisions I owned</h4>
              <ul className="cs__list">
                {study.decisions.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </section>
          )}

          {study.outcome?.length > 0 && (
            <section className="cs__block">
              <h4 className="cs__label">Outcome</h4>
              <ul className="cs__outcomes">
                {study.outcome.map((o, i) => (
                  <li key={i}>
                    <span className={`cs__tier cs__tier--${o.tier}`}>{TIER_LABEL[o.tier] || o.tier}</span>
                    <span>{o.text}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {study.reflection && (
            <section className="cs__block">
              <h4 className="cs__label">Looking back</h4>
              <p className="cs__reflection">{study.reflection}</p>
            </section>
          )}

          {study.stack?.length > 0 && (
            <ul className="cs__stack">
              {study.stack.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
};

const Work = () => {
  const [filter, setFilter] = useState('all');

  const tabs = useMemo(
    () => [{ id: 'all', label: 'All' }, ...groups],
    []
  );

  const visible = useMemo(
    () => (filter === 'all' ? caseStudies : caseStudies.filter((c) => c.group === filter)),
    [filter]
  );

  // Re-keying on the filter restarts the stagger when the list changes.
  const listRef = useRevealGroup(70);

  return (
    <>
      <section className="section work-head">
        <div className="wrap">
          <p className="eyebrow">Work</p>
          <h1 className="work-head__title">Case studies</h1>
          <p className="lede">
            Eight years across medical devices, aviation, retail, energy and enterprise
            tooling. Each one below covers the problem, the calls I made, and what
            actually came of it — including the project that never shipped.
          </p>
        </div>
      </section>

      <section className="section work-body">
        <div className="wrap">
          <div className="work-filters" role="tablist" aria-label="Filter case studies">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                className={`work-filter ${filter === tab.id ? 'is-active' : ''}`}
                onClick={() => setFilter(tab.id)}
              >
                {tab.label}
                <span className="work-filter__count">
                  {tab.id === 'all'
                    ? caseStudies.length
                    : caseStudies.filter((c) => c.group === tab.id).length}
                </span>
              </button>
            ))}
          </div>

          <div className="cs-list" ref={listRef} key={filter}>
            {visible.map((study, i) => (
              <CaseStudy key={study.id} study={study} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
