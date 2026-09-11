import { useCallback, useEffect, useState } from 'react';

const KEY = 'sp-theme';

function initialTheme() {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = window.localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {
    /* private browsing — fall through to the OS preference */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Light/dark theme, persisted across visits.
 *
 * Writes `data-theme` onto <html>, which is what GlobalStyles.css keys off.
 * Until the visitor picks explicitly we keep following the OS setting, so a
 * system theme change mid-session is reflected straight away.
 */
export function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // Keeps the mobile browser chrome in step with the page.
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0f1115' : '#fbfaf8');
  }, [theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      let explicit = null;
      try {
        explicit = window.localStorage.getItem(KEY);
      } catch (err) {
        /* ignore */
      }
      if (!explicit) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(KEY, next);
      } catch (e) {
        /* ignore */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
