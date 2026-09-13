export default function BuiltForEvolving() {
  const items = [
    { title: "New Technology", desc: "Modern stack" },
    { title: "Digital Tools", desc: "Coordinated systems" },
    { title: "Practical AI", desc: "Smart workflows" },
    { title: "CRM Improvement", desc: "Data accuracy" },
    { title: "Growing Teams", desc: "Scalable access" },
    { title: "Less Manual Work", desc: "Higher efficiency" }
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 border-b border-gray-200 pb-12 sm:pb-16">
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-tight text-[#091535]">
            Built for<br className="hidden sm:inline" /> Evolving<br className="hidden sm:inline" /> Businesses
          </h2>
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-lg hover:bg-white rounded-xl p-3.5 sm:p-4 text-center transition-all duration-300 group hover:-translate-y-1 cursor-default min-h-[90px] flex flex-col items-center justify-center"
            >
              <span className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#0047FF] transition-colors leading-tight mb-1">
                {item.title}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium leading-tight">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
