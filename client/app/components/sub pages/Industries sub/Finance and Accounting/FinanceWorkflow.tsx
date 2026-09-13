export default function FinanceWorkflow() {
  const steps = [
    { num: '01', label: 'Collect' },
    { num: '02', label: 'Organise' },
    { num: '03', label: 'Process' },
    { num: '04', label: 'Review' },
    { num: '05', label: 'Report' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#0f172a] text-center mb-12 tracking-tight">
          Support Across the Finance Workflow
        </h2>

        {/* 5 Steps as Modern Responsive Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-5 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer ${
                idx === 4 
                  ? 'col-span-2 sm:col-span-3 md:col-span-1' 
                  : 'col-span-1 sm:col-span-2 md:col-span-1'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] font-black text-base flex items-center justify-center group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-200 mb-2.5">
                {step.num}
              </div>
              <span className="text-[#0f172a] text-[13px] sm:text-[14px] font-bold group-hover:text-blue-600 transition-colors">
                {step.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
