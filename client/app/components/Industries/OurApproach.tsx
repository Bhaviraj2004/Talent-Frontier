const steps = [
  { num: '01', title: 'Understand Your Industry', desc: 'We learn about your business model, operating environment and current challenges.' },
  { num: '02', title: 'Identify Priorities', desc: 'Together, we determine which activities require immediate or ongoing support.' },
  { num: '03', title: 'Build the Right Support Structure', desc: 'The scope, responsibilities, workflows and communication process are clearly defined.' },
  { num: '04', title: 'Deliver and Improve', desc: 'Support is delivered consistently and adjusted as your requirements evolve.' }
];

export default function OurApproach() {
  return (
    <section className="w-full bg-white py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
        
        {/* Left Column */}
        <div className="w-full lg:w-[30%] flex flex-col pt-8">
          <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-4">
            Our Approach
          </h4>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-6">
            A Clear Process.<br/>Better Outcomes.
          </h2>
          <div className="w-12 h-1 bg-[#3b82f6] mb-8"></div>
          <p className="text-[#64748b] text-[14px] leading-relaxed font-medium">
            We understand your needs, build the right process and deliver consistent support that improves as your business grows.
          </p>
        </div>

        {/* Right Column - Timeline */}
        <div className="w-full lg:w-[70%] bg-[#f4f7fc] rounded-[32px] p-8 md:p-12 lg:p-16">
          <div className="flex flex-col w-full relative">
            
            {/* Background Lines for Timeline */}
            <div className="absolute left-[35px] md:left-[55px] top-[40px] bottom-[40px] w-[1px] border-l-2 border-dashed border-blue-200 z-0"></div>

            {steps.map((step, idx) => (
              <div key={idx} className={`flex items-start gap-6 md:gap-12 p-6 md:p-8 rounded-2xl relative z-10 ${idx % 2 === 0 ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
                {/* Number */}
                <div className="relative shrink-0 w-20 md:w-28 flex items-center justify-center">
                  <span className="text-[48px] md:text-[64px] text-[#bfdbfe] font-light leading-none tracking-tighter">
                    {step.num}
                  </span>
                  {/* Dot */}
                  <div className={`absolute top-1/2 -right-[15px] md:-right-[20px] -translate-y-1/2 w-[12px] h-[12px] rounded-full bg-[#3b82f6] z-10 ring-4 ${idx % 2 === 0 ? 'ring-white' : 'ring-[#f4f7fc]'}`}></div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center py-3">
                  <h4 className="text-[#0f172a] font-bold text-[18px] mb-2">{step.title}</h4>
                  <p className="text-[#64748b] text-[13.5px] font-medium leading-relaxed max-w-[400px]">
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
