'use client';

import { useRef, useEffect } from 'react';

export default function SupportApproachTimeline() {
  const timelineSteps = [
    {
      id: "understand",
      num: "01",
      label: "Understand",
      desc: "Deep dive into your business model, goals and operational bottlenecks.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      ),
    },
    {
      id: "assess",
      num: "02",
      label: "Assess",
      desc: "Evaluate current workflows, staffing levels and technology tools.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
      ),
    },
    {
      id: "plan",
      num: "03",
      label: "Plan",
      desc: "Develop a structured, tailored support roadmap and implementation timeline.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
    },
    {
      id: "deliver",
      num: "04",
      label: "Deliver",
      desc: "Execute high-impact business support with accountable deliverables.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
      ),
    },
    {
      id: "review",
      num: "05",
      label: "Review",
      desc: "Continuous performance evaluation, reporting and stakeholder checkpoints.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      ),
    },
    {
      id: "improve",
      num: "06",
      label: "Improve",
      desc: "Iterative optimization and scalable scaling as your company expands.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      ),
    },
  ];

  // Repeat for continuous seamless marquee loop
  const displaySteps = [...timelineSteps, ...timelineSteps, ...timelineSteps];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.85;

    const loop = () => {
      if (!isInteractingRef.current && el) {
        el.scrollLeft += speed;
        // Seamlessly wrap around
        const singleSetWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += singleSetWidth;
        }
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleTouchStart = () => {
    isInteractingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1500);
  };

  // Mouse drag handlers for desktop / emulation
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isInteractingRef.current = true;
    isMouseDownRef.current = true;
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftStartRef.current = scrollRef.current?.scrollLeft || 0;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 1500);
  };

  return (
    <section className="w-full bg-[#f4f7fb] py-12 sm:py-16 px-4 md:px-8 mt-4 rounded-3xl max-w-[95%] mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2.5">
          STRUCTURED WORKFLOW
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2332] mb-3 tracking-tight">
          Our Client Support Approach
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto mb-8 sm:mb-12 font-medium">
          Drag or swipe horizontally to navigate our step-by-step engagement process.
        </p>
        
        {/* Continuous Interactive Scrolling Carousel */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none py-4 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displaySteps.map((step, index) => (
            <div key={`${step.id}-${index}`} className="flex items-center shrink-0">
              {/* Step Card */}
              <div className="w-[200px] sm:w-[230px] md:w-[250px] bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                  Step {step.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1a2332] mb-2 group-hover:text-blue-600 transition-colors">
                  {step.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector */}
              <div className="px-2 sm:px-3 text-blue-400/80 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
