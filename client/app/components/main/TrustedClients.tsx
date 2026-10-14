export default function TrustedClients() {
  const clients = [
    {
      name: "LUMENIX",
      subtitle: "TECHNOLOGIES",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* High-tech faceted lumen crystal */}
          <path d="M16 3L27 9.5V22.5L16 29L5 22.5V9.5L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 8L23 12V20L16 24L9 20V12L16 8Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="16" cy="16" r="3" fill="currentColor" />
          <line x1="16" y1="3" x2="16" y2="8" stroke="currentColor" strokeWidth="1.8" />
          <line x1="27" y1="9.5" x2="23" y2="12" stroke="currentColor" strokeWidth="1.8" />
          <line x1="27" y1="22.5" x2="23" y2="20" stroke="currentColor" strokeWidth="1.8" />
          <line x1="16" y1="29" x2="16" y2="24" stroke="currentColor" strokeWidth="1.8" />
          <line x1="5" y1="22.5" x2="9" y2="20" stroke="currentColor" strokeWidth="1.8" />
          <line x1="5" y1="9.5" x2="9" y2="12" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      name: "ALTURA",
      subtitle: "ADVISORS",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Modern strategic summit chevron monogram */}
          <path d="M16 4L27 24H21L16 14L11 24H5L16 4Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 13L21.5 24H10.5L16 13Z" fill="currentColor" />
          <line x1="8" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "NORTHRIDGE",
      subtitle: "SOLUTIONS",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Architectural dual-summit ridge */}
          <path d="M4 25L13 9L18 17L22 11L28 25H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="13,9 18,17 15,25 9,25" fill="currentColor" fillOpacity="0.22" />
          <polygon points="22,11 26,25 21,25 18,17" fill="currentColor" fillOpacity="0.32" />
          <path d="M13 9L18 25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        </svg>
      )
    },
    {
      name: "VERIDIAN",
      subtitle: "PARTNERS",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Interlocking Mobius synergy partnership rings */}
          <circle cx="11" cy="16" r="7.5" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="21" cy="16" r="7.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M16 11.2C17.6 12.5 18.5 14.2 18.5 16C18.5 17.8 17.6 19.5 16 20.8C14.4 19.5 13.5 17.8 13.5 16C13.5 14.2 14.4 12.5 16 11.2Z" fill="currentColor" fillOpacity="0.3" />
        </svg>
      )
    },
    {
      name: "PEREGRINE",
      subtitle: "CAPITAL",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Aerodynamic falcon wing / venture capital diamond */}
          <path d="M16 3L28 15L16 29L4 15L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 3L28 15L16 29Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M8 15L16 7L24 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 18L16 13L21 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="21" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "NOVENTIS",
      subtitle: "HEALTH",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Modern health cross with vitality heartbeat */}
          <rect x="13" y="5" width="6" height="22" rx="3" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
          <rect x="5" y="13" width="22" height="6" rx="3" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
          <path d="M8 16H13L15 11L17 21L19 16H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: "VERITAS",
      subtitle: "FINANCIAL",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Sovereign financial pillar & shield */}
          <path d="M16 3L6 7V16C6 22.5 10.3 27.5 16 29C21.7 27.5 26 22.5 26 16V7L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 3L6 7V16C6 22.5 10.3 27.5 16 29C21.7 27.5 26 22.5 26 16V7L16 3Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M11 12V21M16 12V21M21 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="9" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="9" y1="21" x2="23" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "COVALENT",
      subtitle: "GLOBAL",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300" viewBox="0 0 32 32" fill="none">
          {/* Global network & covalent orbital sphere */}
          <circle cx="16" cy="16" r="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.8" />
          <ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(-30 16 16)" stroke="currentColor" strokeWidth="1.8" />
          <ellipse cx="16" cy="16" rx="13" ry="5.5" transform="rotate(30 16 16)" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="7" cy="11" r="2" fill="currentColor" />
          <circle cx="25" cy="21" r="2" fill="currentColor" />
          <circle cx="25" cy="11" r="2" fill="currentColor" />
          <circle cx="7" cy="21" r="2" fill="currentColor" />
        </svg>
      )
    }
  ];

  const row1 = clients.slice(0, 4);
  const row2 = clients.slice(4, 8);
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="w-full bg-white py-14 sm:py-18 md:py-20 border-t border-gray-100 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3">
          OUR TRUSTED CLIENTS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 sm:mb-12">
          Trusted by Businesses Worldwide
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-2">
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-44 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-44 bg-gradient-to-l from-white to-transparent z-10" />

        {/* First Row: Continuously moves forward */}
        <div className="mb-4 sm:mb-6 overflow-hidden">
          <div className="animate-marquee-forward flex gap-3 sm:gap-5 py-1">
            {row1Items.map((client, idx) => (
              <div 
                key={`r1-${idx}`} 
                className="flex items-center gap-3 sm:gap-4 bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-blue-500/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-w-[210px] sm:min-w-[250px] md:min-w-[270px] shrink-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-indigo-50/60 group-hover:from-blue-600 group-hover:to-blue-700 text-blue-600 group-hover:text-white group-hover:border-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                  {client.icon}
                </div>
                <div className="text-left min-w-0 flex-1 overflow-hidden">
                  <span className="block text-[12px] sm:text-[14px] font-black tracking-tight text-[#0f172a] group-hover:text-blue-600 transition-colors truncate">
                    {client.name}
                  </span>
                  <span className="block text-[7.5px] sm:text-[9px] tracking-[0.16em] font-bold text-blue-500 mt-0.5 truncate">
                    {client.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row: Continuously moves backward */}
        <div className="overflow-hidden">
          <div className="animate-marquee-backward flex gap-3 sm:gap-5 py-1">
            {row2Items.map((client, idx) => (
              <div 
                key={`r2-${idx}`} 
                className="flex items-center gap-3 sm:gap-4 bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-blue-500/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-w-[210px] sm:min-w-[250px] md:min-w-[270px] shrink-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-indigo-50/60 group-hover:from-blue-600 group-hover:to-blue-700 text-blue-600 group-hover:text-white group-hover:border-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                  {client.icon}
                </div>
                <div className="text-left min-w-0 flex-1 overflow-hidden">
                  <span className="block text-[12px] sm:text-[14px] font-black tracking-tight text-[#0f172a] group-hover:text-blue-600 transition-colors truncate">
                    {client.name}
                  </span>
                  <span className="block text-[7.5px] sm:text-[9px] tracking-[0.16em] font-bold text-blue-500 mt-0.5 truncate">
                    {client.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
