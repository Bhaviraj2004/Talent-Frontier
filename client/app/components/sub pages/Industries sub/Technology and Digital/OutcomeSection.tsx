export default function OutcomeSection() {
  const outcomes = [
    { line1: 'Organised', line2: 'Systems' },
    { line1: 'Clear', line2: 'Workflows' },
    { line1: 'Better', line2: 'Coordination' },
    { line1: 'Flexible', line2: 'Capacity' },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-14">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase block mb-8">
          THE OUTCOME
        </span>

        {/* 4 Outcome Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-between max-w-4xl mb-10">
          {outcomes.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-[#0f172a] font-bold text-[15px] sm:text-[16px] leading-tight">
                {item.line1}<br />{item.line2}
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
