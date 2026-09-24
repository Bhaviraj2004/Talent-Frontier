"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-[#0A1128]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
          alt="Professional team connecting"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A1128]/75 mix-blend-multiply"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/40 via-transparent to-[#0A1128]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <span className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5 sm:mb-6 backdrop-blur-sm">
          HOW WE CONNECT
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-tight mb-5 sm:mb-6">
          Connecting the Right Talent{" "}
          <br className="hidden sm:block" />
          With the Right Opportunity
        </h1>
        <p className="text-blue-100/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          At Talent Frontier, we create meaningful connections between organisations and professionals through a clear, considered and people-focused approach.
        </p>
        <p className="text-slate-300/70 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
          We take the time to understand your business, your requirements and your goals — then connect you with professionals whose experience, capabilities and aspirations align with your needs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800 active:scale-95 text-white font-bold py-3.5 px-8 sm:px-10 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
        >
          Start a Conversation
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>   
    </section>
  );
}
