export default function ComplexToolsSection() {
  const challenges = [
    { line1: 'Disconnected', line2: 'systems' },
    { line1: 'Shifting', line2: 'priorities' },
    { line1: 'Manual', line2: 'activity' },
    { line1: 'Limited', line2: 'visibility' },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[30px] p-8 sm:p-12 lg:p-14 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Title */}
          <div className="w-full lg:w-[42%]">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-[1.2] tracking-tight">
              Complex tools<br />
              shouldn&apos;t create<br />
              complex work.
            </h3>
          </div>

          {/* Right 4 Challenges Cards */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {challenges.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-blue-400/60 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group cursor-pointer text-left"
              >
                <span className="text-white text-[13px] sm:text-[14px] font-semibold leading-snug group-hover:text-blue-200 transition-colors">
                  {item.line1}<br />{item.line2}
                </span>
                <div className="w-8 h-[2px] bg-[#3b82f6] group-hover:w-12 transition-all duration-300 mt-3" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
