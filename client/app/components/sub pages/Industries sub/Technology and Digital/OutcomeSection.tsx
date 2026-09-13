export default function OutcomeSection() {
  const outcomes = [
    { line1: 'Organised', line2: 'Systems' },
    { line1: 'Clear', line2: 'Workflows' },
    { line1: 'Better', line2: 'Coordination' },
    { line1: 'Flexible', line2: 'Capacity' },
  ];

  return (
    <section className="w-full bg-white pt-6 pb-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase block mb-5">
          THE OUTCOME
        </span>

        {/* 4 Outcome Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mb-10">
          {outcomes.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/80 hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14px] sm:text-[15px] leading-tight transition-colors">
                {item.line1} {item.line2}
              </span>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <p className="text-[#64748b] text-[12px] sm:text-[13px] leading-relaxed text-center max-w-2xl mx-auto">
          We handle your information with privacy, security and approved access controls, supported by human review.
        </p>

      </div>
    </section>
  );
}
