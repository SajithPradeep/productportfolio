import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fade-and-rise an element once it scrolls into view.
 *
 * Attach the returned ref to any element carrying the `.reveal` class; the hook
 * adds `.is-visible` when it enters the viewport and then stops observing, so
 * nothing re-animates on scroll-back.
 *
 * `delay` staggers items in a list (ms).
 */
export function useReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Reduced motion, or a browser without IO: show it immediately.
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return undefined;
    }

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      // Fire slightly before the element is fully on screen so the motion
      // finishes around the time the reader's eye arrives.
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return ref;
}

/**
 * Reveal a whole group of children with a stagger, without needing a ref per
 * item. Attach to the container; every `.reveal` descendant gets sequenced.
 */
export function useRevealGroup(step = 70) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const items = Array.from(root.querySelectorAll('.reveal'));
    if (!items.length) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      items.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = items.indexOf(entry.target);
          entry.target.style.transitionDelay = `${Math.max(index, 0) * step}ms`;
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [step]);

  return ref;
}
