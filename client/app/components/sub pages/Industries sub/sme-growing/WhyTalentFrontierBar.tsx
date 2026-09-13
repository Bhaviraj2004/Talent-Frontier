export default function WhyTalentFrontierBar() {
  const attributes = [
    "Requirement-Led Solutions",
    "Flexible Support",
    "Transparent Communication",
    "Outcome-Focused",
    "Client-Led"
  ];

  return (
    <section className="w-full bg-[#0b162c] py-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
        <h3 className="text-white font-bold text-xl md:text-2xl shrink-0">
          Why Talent<br />Frontier
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3 sm:gap-4 w-full">
          {attributes.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white/10 hover:bg-white/20 border border-white/15 hover:border-blue-400/60 rounded-xl p-3.5 sm:p-4 text-center flex items-center justify-center hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer ${
                idx === 4 
                  ? 'col-span-2 sm:col-span-3 lg:col-span-1' 
                  : 'col-span-1 sm:col-span-2 lg:col-span-1'
              }`}
            >
              <span className="text-white group-hover:text-blue-200 text-[13px] sm:text-[14px] font-semibold leading-snug transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
