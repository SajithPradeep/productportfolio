import { render, screen, within } from '@testing-library/react';
import App from './App';
import { profile } from './data/site';
import { caseStudies } from './data/caseStudies';

// App mounts its own BrowserRouter, so it can be rendered directly.

describe('site shell', () => {
  test('renders the name in the header and the hero', () => {
    render(<App />);
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0);
  });

  test('exposes the primary navigation', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: /primary/i });
    ['Home', 'Work', 'About', 'Contact'].forEach((label) => {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  test('offers a theme toggle', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /switch to (light|dark) theme/i })).toBeInTheDocument();
  });
});

describe('case study content', () => {
  test('every case study has the fields the Work page renders', () => {
    caseStudies.forEach((cs) => {
      expect(cs.id).toBeTruthy();
      expect(cs.title).toBeTruthy();
      expect(cs.summary).toBeTruthy();
      expect(cs.group).toBeTruthy();
      expect(Array.isArray(cs.outcome)).toBe(true);
    });
  });

  test('case study ids are unique', () => {
    const ids = caseStudies.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  // Outcome tiers drive the Measured/Modelled/Scope badges. A typo here would
  // render an unstyled badge rather than fail loudly, so assert on it.
  test('outcome tiers are one of the three known values', () => {
    const allowed = ['measured', 'modeled', 'scope'];
    caseStudies.forEach((cs) => {
      cs.outcome.forEach((o) => {
        expect(allowed).toContain(o.tier);
      });
    });
  });
});
