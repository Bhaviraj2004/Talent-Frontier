export default function TrustedClients() {
  const clients = [
    {
      name: "NORTHRIDGE",
      subtitle: "SOLUTIONS",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      )
    },
    {
      name: "VERIDIAN",
      subtitle: "PARTNERS",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
      )
    },
    {
      name: "LUMENIX",
      subtitle: "TECHNOLOGIES",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
          <circle cx="12" cy="11" r="2.5" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "ALTURA",
      subtitle: "ADVISORS",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
          <polyline points="18 9 12 3 6 9" />
        </svg>
      )
    },
    {
      name: "NOVENTIS",
      subtitle: "HEALTH",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12h14" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
    },
    {
      name: "VERITAS",
      subtitle: "FINANCIAL",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        </svg>
      )
    },
    {
      name: "COVALENT",
      subtitle: "GLOBAL",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(35 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      name: "PEREGRINE",
      subtitle: "CAPITAL",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 21 8.5 17 21 7 21 3 8.5 12 2" />
          <line x1="12" y1="2" x2="12" y2="21" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-18 md:py-20 border-t border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 text-center">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2 sm:mb-3">
          OUR TRUSTED CLIENTS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-8 sm:mb-12">
          Trusted by Businesses Worldwide
        </h2>
        
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2.5 sm:gap-3.5 bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-blue-400 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-w-0"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl border-2 border-blue-500 bg-blue-50/70 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300">
                {client.icon}
              </div>
              <div className="text-left min-w-0 flex-1 overflow-hidden">
                <span className="block text-[11px] sm:text-sm font-black tracking-tight text-[#0f172a] group-hover:text-blue-600 transition-colors truncate">
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
    </section>
  );
}
