'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Exclude console / admin paths
    if (pathname?.startsWith('/console')) return;

    // Respect reduced motion preferences
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      // Disconnect previous observer if any
      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add('revealed');
              observer?.unobserve(target);

              // Allow component's native hover/active transitions to resume smoothly after reveal
              setTimeout(() => {
                target.classList.add('reveal-done');
              }, 950);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -55px 0px',
          threshold: 0.08,
        }
      );

      const viewportHeight = window.innerHeight;

      // Find candidate elements to animate on scroll
      // 1. All sections inside main (except top heroes)
      const sections = document.querySelectorAll('main section, main > div > section');
      sections.forEach((sec, idx) => {
        const el = sec as HTMLElement;
        const rect = el.getBoundingClientRect();

        // If element is already in initial viewport (above fold), reveal immediately
        if (rect.top < viewportHeight * 0.85 || (idx === 0 && rect.top < viewportHeight)) {
          el.classList.add('revealed', 'reveal-done');
          return;
        }

        if (!el.classList.contains('revealed')) {
          el.classList.add('reveal-init');
          observer?.observe(el);
        }

        // Section Headers (Badge, Title, Paragraph)
        const headerBlock = el.querySelector(':scope > div > div:first-child, :scope > div > .text-center');
        if (headerBlock && !headerBlock.classList.contains('grid')) {
          const badge = headerBlock.querySelector('p, span');
          const title = headerBlock.querySelector('h2, h3');
          const desc = headerBlock.querySelector('p:last-child');

          if (badge && !badge.classList.contains('revealed')) {
            (badge as HTMLElement).classList.add('reveal-init');
            (badge as HTMLElement).style.setProperty('--reveal-delay', '0ms');
            observer?.observe(badge);
          }
          if (title && !title.classList.contains('revealed')) {
            (title as HTMLElement).classList.add('reveal-init');
            (title as HTMLElement).style.setProperty('--reveal-delay', '80ms');
            observer?.observe(title);
          }
          if (desc && desc !== badge && !desc.classList.contains('revealed')) {
            (desc as HTMLElement).classList.add('reveal-init');
            (desc as HTMLElement).style.setProperty('--reveal-delay', '160ms');
            observer?.observe(desc);
          }
        }

        // Stagger cards inside grids
        const grid = el.querySelector(':scope > div > .grid, :scope .grid');
        if (grid) {
          const cards = grid.children;
          Array.from(cards).forEach((card, cardIdx) => {
            const cardEl = card as HTMLElement;
            if (!cardEl.classList.contains('revealed')) {
              const delay = (cardIdx % 4) * 110;
              cardEl.style.setProperty('--reveal-delay', `${delay}ms`);
              cardEl.classList.add('reveal-init', 'reveal-card');
              observer?.observe(cardEl);
            }
          });
        }

        // Alternating steps / row blocks (like ApproachSteps)
        const stepRows = el.querySelectorAll(':scope > div.flex, :scope > div > div.flex');
        stepRows.forEach((row, rowIdx) => {
          const rowEl = row as HTMLElement;
          if (!rowEl.classList.contains('revealed') && rowEl.children.length === 2) {
            const firstChild = rowEl.children[0] as HTMLElement;
            const secondChild = rowEl.children[1] as HTMLElement;

            if (!firstChild.classList.contains('revealed')) {
              firstChild.classList.add('reveal-init', rowIdx % 2 === 0 ? 'reveal-left' : 'reveal-right');
              firstChild.style.setProperty('--reveal-delay', '50ms');
              observer?.observe(firstChild);
            }
            if (!secondChild.classList.contains('revealed')) {
              secondChild.classList.add('reveal-init', rowIdx % 2 === 0 ? 'reveal-right' : 'reveal-left');
              secondChild.style.setProperty('--reveal-delay', '120ms');
              observer?.observe(secondChild);
            }
          }
        });
      });

      // Also observe CTA buttons & banner
      const ctas = document.querySelectorAll('main a.bg-\\[\\#1d4ed8\\], main a.bg-blue-600, main .shadow-lg');
      ctas.forEach((cta) => {
        const ctaEl = cta as HTMLElement;
        const rect = ctaEl.getBoundingClientRect();
        if (rect.top >= viewportHeight * 0.85 && !ctaEl.classList.contains('revealed')) {
          ctaEl.classList.add('reveal-init');
          ctaEl.style.setProperty('--reveal-delay', '100ms');
          observer?.observe(ctaEl);
        }
      });

      // Also observe footer
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.85) {
          footer.classList.add('revealed', 'reveal-done');
        } else if (!footer.classList.contains('revealed')) {
          footer.classList.add('reveal-init');
          observer?.observe(footer);
        }
      }
    };

    // Run setup after DOM has settled
    const timer1 = setTimeout(setupObserver, 80);
    const timer2 = setTimeout(setupObserver, 350);

    // Fallback safety: ensure all elements become visible after 4 seconds
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.reveal-init:not(.revealed)').forEach((el) => {
        el.classList.add('revealed', 'reveal-done');
      });
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(safetyTimer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
