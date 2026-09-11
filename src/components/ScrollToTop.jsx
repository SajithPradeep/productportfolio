import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router keeps the scroll position across route changes, which on a
 * multi-page site means navigating from halfway down one page drops you
 * halfway down the next. This resets it.
 *
 * Jumps instantly rather than smooth-scrolling: animating a route change reads
 * as lag, and the global `scroll-behavior: smooth` would otherwise apply here.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
