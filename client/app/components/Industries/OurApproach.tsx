const steps = [
  { num: '01', title: 'Understand Your Industry', desc: 'We learn about your business model, operating environment and current challenges.' },
  { num: '02', title: 'Identify Priorities', desc: 'Together, we determine which activities require immediate or ongoing support.' },
  { num: '03', title: 'Build the Right Support Structure', desc: 'The scope, responsibilities, workflows and communication process are clearly defined.' },
  { num: '04', title: 'Deliver and Improve', desc: 'Support is delivered consistently and adjusted as your requirements evolve.' }
];

export default function OurApproach() {
  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="w-full lg:w-[30%] flex flex-col pt-2 lg:pt-6">
          <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-3 sm:mb-4">
            Our Approach
          </h4>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-4 sm:mb-6">
            A Clear Process.<br/>Better Outcomes.
          </h2>
          <div className="w-12 h-1 bg-[#3b82f6] mb-5 sm:mb-8"></div>
          <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed font-medium">
            We understand your needs, build the right process and deliver consistent support that improves as your business grows.
          </p>
        </div>

        {/* Right Column - 4 Clear & Attractive Approach Cards */}
        <div className="w-full lg:w-[70%] bg-[#f4f7fc] rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#1d4ed8] font-bold text-base sm:text-lg flex items-center justify-center border border-blue-100/80 shadow-xs group-hover:bg-[#1d4ed8] group-hover:text-white transition-all duration-300">
                    {step.num}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#1d4ed8] transition-colors">
                    Step {idx + 1}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-[#0f172a] font-bold text-[16px] sm:text-[17px] mb-2 leading-snug group-hover:text-[#1d4ed8] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[#64748b] text-[12.5px] sm:text-[13.5px] font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
