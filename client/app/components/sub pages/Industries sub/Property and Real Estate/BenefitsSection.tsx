export default function BenefitsSection() {
  const benefits = [
    { line1: 'Organised', line2: 'Records' },
    { line1: 'Clear', line2: 'Coordination' },
    { line1: 'Consistent', line2: 'Communication' },
    { line1: 'Flexible', line2: 'Support' },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Column Grid with Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch border-b border-gray-100 pb-10">
          
          {/* Column 1: Heading Card */}
          <div className="bg-[#0a1835] text-white p-5 rounded-2xl flex flex-col justify-center shadow-sm sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-[16px] sm:text-[17px] leading-tight text-white">
              The Benefits<br />for Your Team
            </h4>
            <p className="text-blue-300 text-xs mt-2">Operational confidence</p>
          </div>

          {/* Columns 2-5: Benefits Cards */}
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/80 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14px] sm:text-[15px] leading-snug transition-colors">
                {item.line1}<br />{item.line2}
              </span>
            </div>
          ))}

        </div>

        {/* Disclaimer Note */}
        <p className="text-[#64748b] text-[12px] sm:text-[13px] leading-relaxed text-center mt-6">
          Support is delivered within approved systems, access controls and review processes.
        </p>

      </div>
    </section>
  );
}
