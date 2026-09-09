const steps = [
  { num: '01', title: 'Understand', desc: 'We begin by understanding your business, current challenges, priorities and the type of support you require.' },
  { num: '02', title: 'Plan', desc: 'Based on your requirements, we create a clear support plan outlining the scope, responsibilities, workflows and priorities.' },
  { num: '03', title: 'Set Up', desc: 'We establish the required processes, communication channels, tools and documentation for smooth service delivery.' },
  { num: '04', title: 'Deliver', desc: 'Our team begins delivering the agreed support with a focus on quality, consistency and clear communication.' },
  { num: '05', title: 'Review', desc: 'We regularly review progress, outcomes and changing business requirements to ensure the support remains effective.' },
  { num: '06', title: 'Improve', desc: 'Processes and workflows are refined over time to improve efficiency, consistency and overall business performance.' }
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-10 sm:py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="bg-[#f2f6fc] rounded-2xl sm:rounded-[32px] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1e293b] text-center mb-6 sm:mb-12 md:mb-20 tracking-tight">
            How We Work
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row relative gap-3.5 sm:gap-6 md:gap-0">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[18px] left-[8%] right-[8%] h-[2px] bg-slate-300/80 z-0"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex-1 relative z-10 flex flex-col items-center text-center bg-white/90 md:bg-transparent rounded-2xl md:rounded-none p-4 sm:p-5 md:p-0 px-2 lg:px-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)] md:shadow-none border border-slate-200/60 md:border-0 hover:-translate-y-0.5 md:hover:translate-y-0 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-auto md:h-auto rounded-xl md:rounded-none bg-blue-50 md:bg-[#f2f6fc] text-[#1d4ed8] md:text-[#0f172a] flex items-center justify-center font-bold text-sm sm:text-base md:text-[26px] lg:text-[28px] md:px-4 lg:px-6 mb-3 sm:mb-4 md:mb-5 shadow-sm md:shadow-none">
                  <span className="inline-block tracking-tight">{step.num}</span>
                </div>
                
                <h3 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-bold text-[#1e293b] mb-1.5 sm:mb-2 md:mb-4">
                  {step.title}
                </h3>
                
                <p className="text-[11.5px] sm:text-[12px] md:text-[12.5px] lg:text-[13px] text-slate-500 leading-relaxed font-medium max-w-[200px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
