export default function MorePropertiesBanner() {
  const challenges = [
    { line1: 'Scattered', line2: 'Information' },
    { line1: 'Delayed', line2: 'Follow-Ups' },
    { line1: 'Repetitive', line2: 'Administration' },
    { line1: 'Limited', line2: 'Visibility' },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#dce6f5] rounded-[16px] md:rounded-[24px] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Title */}
          <div className="w-full lg:w-[45%]">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0f172a] leading-[1.2] tracking-tight">
              More properties.<br />
              More moving parts.
            </h3>
          </div>

          {/* Right 4 Challenges Cards */}
          <div className="w-full lg:w-[55%] grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {challenges.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 hover:bg-white p-4 rounded-xl border border-blue-200/60 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col items-center justify-center text-center shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors duration-300">
                  <span className="text-xs font-bold">0{idx + 1}</span>
                </div>
                <span className="text-[#0f172a] group-hover:text-blue-600 text-[13px] sm:text-[14px] font-semibold leading-snug transition-colors">
                  {item.line1}<br />{item.line2}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
