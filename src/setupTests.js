// jest-dom adds custom matchers for asserting on DOM nodes, e.g.
// expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom';

// jsdom implements neither of the browser APIs this site relies on, so both
// need stubbing before any component mounts. These are environment gaps rather
// than application concerns — the components themselves already guard for
// browsers where IntersectionObserver is genuinely missing.

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,           // tests run in the light, full-motion default
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},    // deprecated, retained for older callers
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

if (typeof window.IntersectionObserver === 'undefined') {
  // Reveal-on-scroll is decorative; a no-op keeps content in the DOM, which is
  // what the tests assert against.
  window.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  };
}
