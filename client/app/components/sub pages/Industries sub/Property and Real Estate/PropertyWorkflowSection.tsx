'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

export default function PropertyWorkflowSection() {
  const steps = [
    {
      num: '01',
      title: 'Enquiry',
      desc: 'Capture and log tenant, buyer & vendor inquiries promptly',
    },
    {
      num: '02',
      title: 'Organise',
      desc: 'Structure contracts, compliance documents & property records',
    },
    {
      num: '03',
      title: 'Coordinate',
      desc: 'Seamlessly schedule inspections, maintenance & contractors',
    },
    {
      num: '04',
      title: 'Update',
      desc: 'Synchronise CRM data, listings & portal management',
    },
    {
      num: '05',
      title: 'Follow Up',
      desc: 'Timely client communication, report generation & feedback',
    },
  ];

  // Tripled steps array for seamless infinite looping
  const infiniteSteps = [...steps, ...steps, ...steps];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    const speed = 0.75; // pixels per frame

    const stepScroll = () => {
      if (!isPaused && !isDragging && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += speed;

        // Loop seamlessly when reached half-way through the triplicated set
        const oneSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= oneSetWidth * 2) {
          container.scrollLeft -= oneSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(stepScroll);
    };

    animationFrameId = requestAnimationFrame(stepScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Initial scroll position to the middle set
  useEffect(() => {
    if (scrollContainerRef.current) {
      const oneSetWidth = scrollContainerRef.current.scrollWidth / 3;
      scrollContainerRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  // Manual button scroll
  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse drag controls
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-slate-50/60 py-12 md:py-16 border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Manual Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[#2563eb] text-xs font-bold tracking-wider uppercase">
                Interactive Workflow
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
              Our Property Workflow
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Continuously moving — touch or drag to explore steps
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => handleManualScroll('left')}
              aria-label="Previous step"
              className="w-10 h-10 rounded-full bg-white hover:bg-blue-600 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              aria-label="Next step"
              className="w-10 h-10 rounded-full bg-white hover:bg-blue-600 hover:text-white border border-slate-200 text-slate-700 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Continuous Scroller Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUpOrLeave();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteSteps.map((step, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[260px] sm:w-[300px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500/60 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white font-black text-sm flex items-center justify-center transition-colors duration-300 shadow-xs">
                    {step.num}
                  </span>
                  <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider group-hover:text-blue-500 transition-colors">
                    Stage {step.num}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Workflow step</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
