export default function WhatYouCanExpect() {
  const expectations = [
    { 
      title: 'Organised Records', 
      desc: 'Accurate data categorization and systematically structured audit-ready documentation.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      title: 'Clear Workflows', 
      desc: 'Transparent, repeatable procedures with strict sign-offs and validation checkpoints.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )
    },
    { 
      title: 'Reliable Coordination', 
      desc: 'Proactive follow-ups, seamless handoffs, and consistent communication with stakeholders.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      title: 'Flexible Support', 
      desc: 'Scalable operational capacity that adapts seamlessly to month-end or seasonal demands.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#0f172a] text-center mb-10 tracking-tight">
          What You Can Expect
        </h2>

        {/* 4 Expectation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-12">
          {expectations.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/80 hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-[#0f172a] font-bold text-[16px] sm:text-[17px] mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-[#64748b] text-[13px] sm:text-[13.5px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Oversight Note */}
        <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl py-4 px-6 text-center max-w-3xl mx-auto shadow-sm">
          <h4 className="text-[#0f172a] font-bold text-[13px] sm:text-[14px] mb-1">
            Appropriate Professional Oversight
          </h4>
          <p className="text-[#64748b] text-[12px] sm:text-[13px] leading-relaxed">
            Regulated advice, auditing and statutory decisions remain with qualified and authorised professionals.
          </p>
        </div>

      </div>
    </section>
  );
}
