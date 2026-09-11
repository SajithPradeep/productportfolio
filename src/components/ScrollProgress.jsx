import React, { useEffect, useState } from 'react';
import '../styles/ScrollProgress.css';

/**
 * Thin reading-progress bar pinned under the navbar.
 *
 * Driven by rAF rather than reacting to every scroll event, so it stays smooth
 * on long pages without thrashing layout.
 */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? Math.min(doc.scrollTop / scrollable, 1) : 0);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
};

export default ScrollProgress;
