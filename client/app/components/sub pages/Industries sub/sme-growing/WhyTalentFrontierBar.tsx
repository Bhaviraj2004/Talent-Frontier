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
        
        <div className="flex flex-wrap md:flex-nowrap items-center gap-x-12 gap-y-6 overflow-hidden">
          {attributes.map((item, idx) => (
            <div key={idx} className={`flex items-center ${idx !== 0 ? 'md:border-l border-white/20 md:pl-12' : ''}`}>
              <span className="text-white text-[13px] font-semibold max-w-[120px] leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
