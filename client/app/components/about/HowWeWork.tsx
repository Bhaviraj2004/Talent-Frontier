'use client';

import { useRef, useEffect } from 'react';
import { Search, ClipboardList, Settings, Send, BarChart2, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowWeWork() {
  const steps = [
    { title: "Understand", icon: Search },
    { title: "Plan", icon: ClipboardList },
    { title: "Set Up", icon: Settings },
    { title: "Deliver", icon: Send },
    { title: "Review", icon: BarChart2 },
    { title: "Improve", icon: TrendingUp },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.8; // Smooth continuous auto-scroll speed

    const loop = () => {
      if (!isInteractingRef.current && el) {
        el.scrollLeft += speed;
        // Seamlessly reset when reaching halfway through the repeated list
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += el.scrollWidth / 2;
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

  // Mouse drag handlers for mobile emulation / desktop testing
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
    <section className="py-12 sm:py-24 bg-[#08154a] font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-20 gap-6 sm:gap-10">
          <div className="flex-1">
            <h4 className="text-blue-500 text-sm font-bold mb-3 sm:mb-4">How We Work</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Understand First. Support Better.</h2>
          </div>
          <div className="flex-1 max-w-lg">
            <p className="text-slate-300 text-sm leading-relaxed">
              We begin by understanding your business, current processes and specific challenges. From there, we create a clear support structure designed around your requirements.
            </p>
          </div>
        </div>

        {/* Mobile View: Continuously movable forward & manually scrollable via touch */}
        <div className="flex md:hidden relative w-full overflow-hidden mb-10 py-1">
          {/* Gradient fade on left and right edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#08154a] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#08154a] to-transparent z-10" />

          <div
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex items-center gap-2 py-2 overflow-x-auto no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing select-none w-full"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {[...steps, ...steps, ...steps, ...steps].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={`mob-${idx}`} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center px-3.5 py-1">
                    <div className="w-13 h-13 rounded-full border border-slate-500/80 bg-[#0c1e63] flex items-center justify-center text-white mb-2 shadow-sm">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-[11px] font-medium text-white text-center whitespace-nowrap">
                      {step.title}
                    </h4>
                  </div>
                  <div className="flex-shrink-0 mx-1 text-slate-400">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View: Static clean balanced layout */}
        <div className="hidden md:flex md:flex-row justify-between items-center max-w-5xl mx-auto mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex items-center justify-center flex-1">
                <div className="flex flex-col items-center mx-auto">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-slate-500 flex items-center justify-center text-white mb-3 sm:mb-4 hover:bg-blue-600 transition-colors cursor-default shadow-sm">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xs font-medium text-white text-center whitespace-nowrap">
                    {step.title}
                  </h4>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0 mx-2 md:mx-4 text-slate-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Link href="/about/our-approach" className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-semibold text-sm transition-colors flex items-center gap-2">
            Explore Our Approach <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

