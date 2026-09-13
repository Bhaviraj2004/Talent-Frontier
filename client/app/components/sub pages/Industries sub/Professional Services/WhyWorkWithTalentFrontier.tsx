export default function WhyWorkWithTalentFrontier() {
  const values = [
    {
      title: 'Requirement-Led',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Target / Bullseye icon */}
          <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="5" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Process-Focused',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Process / Cogwheel / Flow */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Flexible',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Branching hierarchy / Flexible tree icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      title: 'Transparent',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Eye / Transparent icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Collaborative',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Collaborative / Partner handshake */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-lg">
          
          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 tracking-tight">
            Why Work With Talent Frontier?
          </h3>

          {/* 5 Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-blue-400/60 rounded-2xl p-4 sm:p-5 flex flex-row sm:flex-col items-center justify-center gap-3.5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer text-left sm:text-center last:sm:col-span-2 last:lg:col-span-1"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-white text-[13.5px] sm:text-[14px] font-semibold leading-tight group-hover:text-blue-200 transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
