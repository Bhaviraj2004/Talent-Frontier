export default function TrustedClients() {
  const clients = [
    {
      id: "lacen-belder",
      name: "LACEN BELDER",
      displayTitle: (
        <>
          LACEN <span className="text-sky-500 font-semibold">/</span> BELDER
        </>
      ),
      subtitle: "CLIENT PARTNER",
      icon: (
        <div className="flex items-center justify-center font-black tracking-tight text-sm sm:text-base select-none">
          <span className="font-extrabold transition-colors">L</span>
          <span className="text-sky-400 group-hover:text-sky-200 mx-0.5 text-base sm:text-lg font-light leading-none">/</span>
          <span className="font-extrabold transition-colors">B</span>
        </div>
      )
    },
    {
      id: "direct-property-connect",
      name: "DIRECT PROPERTY CONNECT",
      displayTitle: "DIRECT PROPERTY CONNECT",
      subtitle: "CLIENT PARTNER",
      icon: (
        <svg className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300" viewBox="0 0 56 22" fill="none">
          {/* Arrow */}
          <path d="M3 11H16M11 6L16 11L11 16" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Green Triangle */}
          <polygon points="28,3 36,19 20,19" stroke="#00af7e" strokeWidth="2.4" fill="none" strokeLinejoin="round" />
          {/* Grey Circle */}
          <circle cx="46" cy="11" r="7" stroke="#939498" strokeWidth="2.4" fill="none" />
        </svg>
      )
    }
  ];

  // Base repeating sequence for seamless infinite marquee loop
  const baseRow1 = [
    clients[0],
    clients[1],
    clients[0],
    clients[1],
    clients[0],
    clients[1],
    clients[0],
    clients[1]
  ];

  const baseRow2 = [
    clients[1],
    clients[0],
    clients[1],
    clients[0],
    clients[1],
    clients[0],
    clients[1],
    clients[0]
  ];

  // Duplicate for the 50% translateX CSS keyframe loop
  const row1Items = [...baseRow1, ...baseRow1];
  const row2Items = [...baseRow2, ...baseRow2];

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
                className="flex items-center gap-3 sm:gap-4 bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-blue-500/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-w-[240px] sm:min-w-[280px] md:min-w-[310px] shrink-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-indigo-50/60 group-hover:from-blue-600 group-hover:to-blue-700 text-blue-600 group-hover:text-white group-hover:border-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 px-1">
                  {client.icon}
                </div>
                <div className="text-left min-w-0 flex-1 overflow-hidden">
                  <span className="block text-[12px] sm:text-[13.5px] font-black tracking-tight text-[#0f172a] group-hover:text-blue-600 transition-colors truncate">
                    {client.displayTitle}
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
                className="flex items-center gap-3 sm:gap-4 bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-blue-500/80 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-w-[240px] sm:min-w-[280px] md:min-w-[310px] shrink-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-blue-200/70 bg-gradient-to-br from-blue-50 to-indigo-50/60 group-hover:from-blue-600 group-hover:to-blue-700 text-blue-600 group-hover:text-white group-hover:border-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 px-1">
                  {client.icon}
                </div>
                <div className="text-left min-w-0 flex-1 overflow-hidden">
                  <span className="block text-[12px] sm:text-[13.5px] font-black tracking-tight text-[#0f172a] group-hover:text-blue-600 transition-colors truncate">
                    {client.displayTitle}
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
