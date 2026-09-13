export default function ComparisonTable() {
  const comparisons = [
    {
      traditional: 'Multiple disconnected providers',
      our: 'Coordinated business support'
    },
    {
      traditional: 'Generic, one-size-fits-all services',
      our: 'Solutions tailored to your requirements'
    },
    {
      traditional: 'Limited progress visibility',
      our: 'Clear and transparent communication'
    },
    {
      traditional: 'Transaction-focused engagement',
      our: 'Long-term, relationship-focused support'
    },
    {
      traditional: 'Manual and inefficient coordination',
      our: 'Technology-enabled workflows'
    }
  ];

  return (
    <section className="w-full bg-[#0a192f] py-12 sm:py-16 md:py-20 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-14 max-w-xl leading-snug">
          A Better Business <br /> Support Experience
        </h2>
        
        <div className="w-full text-white">
          <div className="grid grid-cols-2 text-center md:text-left mb-4 sm:mb-6">
            <div className="text-xs sm:text-sm md:text-base pr-2 sm:pr-4 md:pr-12 border-r border-gray-600 flex justify-center md:justify-end font-bold text-slate-400">
              Traditional Approach
            </div>
            <div className="text-xs sm:text-sm md:text-base pl-2 sm:pl-4 md:pl-12 flex justify-center md:justify-start font-bold text-[#3b82f6]">
              Our Approach
            </div>
          </div>
          
          <div className="w-full h-px bg-[#0047FF] mb-4 sm:mb-6"></div>
          
          <div className="flex flex-col">
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 group hover:bg-white/[0.02] transition-colors">
                <div className="text-[11.5px] sm:text-xs md:text-sm text-gray-300 pr-2 sm:pr-4 md:pr-12 py-3 sm:py-4 border-r border-gray-700 flex items-center justify-center md:justify-end text-center md:text-right border-b border-gray-800 leading-snug">
                  {item.traditional}
                </div>
                <div className="text-[11.5px] sm:text-xs md:text-sm text-white pl-2 sm:pl-4 md:pl-12 py-3 sm:py-4 flex items-center justify-center md:justify-start border-b border-gray-800 leading-snug gap-1.5 sm:gap-2">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0047FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-center md:text-left font-medium">{item.our}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
