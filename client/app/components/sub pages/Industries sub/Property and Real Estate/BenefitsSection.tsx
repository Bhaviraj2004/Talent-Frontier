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
        
        {/* 5 Column Grid with Dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 items-center border-b border-gray-100 pb-10">
          
          {/* Column 1: Heading */}
          <div className="px-4 lg:border-r lg:border-gray-200">
            <h4 className="text-[#0f172a] font-bold text-[15px] sm:text-[16px] leading-tight">
              The Benefits<br />for Your Team
            </h4>
          </div>

          {/* Columns 2-5: Benefits */}
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="px-4 lg:border-r lg:border-gray-200 last:lg:border-r-0 text-center lg:text-left"
            >
              <span className="text-[#0f172a] font-bold text-[14px] sm:text-[15px] leading-snug">
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
