export default function WhatYouCanExpect() {
  const expectations = [
    { line1: 'Organised', line2: 'Records' },
    { line1: 'Clear', line2: 'Workflows' },
    { line1: 'Reliable', line2: 'Coordination' },
    { line1: 'Flexible', line2: 'Support' },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#0f172a] text-center mb-10 tracking-tight">
          What You Can Expect
        </h2>

        {/* 4 Blue Expectation Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center max-w-4xl mx-auto mb-12">
          {expectations.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className="text-[#2563eb] font-bold text-[15px] sm:text-[16px] leading-tight">
                {item.line1}<br />{item.line2}
              </span>
            </div>
          ))}
        </div>

        {/* Oversight Note */}
        <div className="bg-[#f8fafc] border border-gray-100 rounded-xl py-4 px-6 text-center max-w-3xl mx-auto">
          <h4 className="text-[#0f172a] font-bold text-[12px] sm:text-[13px] mb-1">
            Appropriate Professional Oversight
          </h4>
          <p className="text-[#64748b] text-[11px] sm:text-[12px] leading-relaxed">
            Regulated advice, auditing and statutory decisions remain with qualified and authorised professionals.
          </p>
        </div>

      </div>
    </section>
  );
}
