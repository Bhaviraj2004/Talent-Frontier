export default function DesignedForGrowing() {
  const items = [
    { title: "SMEs", subtitle: "Growing businesses" },
    { title: "Accounting & Bookkeeping", subtitle: "Practices & firms" },
    { title: "Growing Teams", subtitle: "Finance departments" },
    { title: "Transaction Volumes", subtitle: "Increasing records" },
    { title: "Finance Workflows", subtitle: "Process improvement" },
    { title: "Recurring Admin", subtitle: "Daily coordination" }
  ];

  return (
    <section className="w-full bg-[#091535] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 mt-6 sm:mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
            Designed for Growing<br className="hidden sm:inline" /> Finance Requirements
          </h2>
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-blue-400/60 rounded-xl p-3.5 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:-translate-y-1 cursor-default shadow-sm min-h-[90px]"
            >
              <span className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-300 transition-colors leading-tight mb-1">
                {item.title}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
