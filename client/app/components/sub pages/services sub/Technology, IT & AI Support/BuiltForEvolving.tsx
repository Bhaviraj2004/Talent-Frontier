export default function BuiltForEvolving() {
  const items = [
    { title: "Modern Tech Stack", desc: "Scalable codebases" },
    { title: "Connected Systems", desc: "API integrations" },
    { title: "Practical AI", desc: "Automated workflows" },
    { title: "CRM & Pipelines", desc: "Data accuracy" },
    { title: "Growing Teams", desc: "Flexible access" },
    { title: "Less Manual Work", desc: "High efficiency" }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <div className="w-full bg-[#091535] text-white rounded-[24px] md:rounded-[32px] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 shadow-xl">
        <div className="w-full lg:w-1/4 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-bold leading-tight">
            Built for Modern<br className="hidden sm:inline" /> Tech & Smarter<br className="hidden sm:inline" /> Workflows
          </h2>
        </div>
        <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-blue-400/60 rounded-xl p-3 text-center transition-all duration-300 group hover:-translate-y-1 cursor-default min-h-[84px] flex flex-col items-center justify-center shadow-sm"
            >
              <span className="font-bold text-xs sm:text-sm text-white group-hover:text-blue-300 transition-colors leading-tight mb-1">
                {item.title}
              </span>
              <span className="text-[11px] text-slate-300 font-medium leading-tight">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
