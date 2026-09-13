export default function BenefitsBar() {
  const benefits = [
    {
      title: "More Capacity",
      desc: "Relieve pressure on core teams and expand operational bandwidth.",
      icon: (
        <svg className="w-6 h-6 text-[#1d4ed8] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Clearer Processes",
      desc: "Repeatable standard operating procedures that eliminate guesswork.",
      icon: (
        <svg className="w-6 h-6 text-[#1d4ed8] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )
    },
    {
      title: "Better Visibility",
      desc: "Transparent tracking and accurate records for informed decisions.",
      icon: (
        <svg className="w-6 h-6 text-[#1d4ed8] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Flexible Support",
      desc: "Agile operational capacity that scales up as your business grows.",
      icon: (
        <svg className="w-6 h-6 text-[#1d4ed8] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#dbe7f7] py-14 md:py-18 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/90 hover:bg-white p-6 sm:p-7 rounded-2xl border border-white/80 hover:border-blue-500/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#1d4ed8] flex items-center justify-center mb-4 transition-colors duration-300 shadow-xs">
                  {item.icon}
                </div>
                <h3 className="text-[#0b162c] group-hover:text-blue-600 font-bold text-lg sm:text-xl leading-tight tracking-tight mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
