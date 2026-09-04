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
    <section className="w-full bg-white py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-[#f2f6fc] rounded-[32px] py-16 px-6 md:px-12 w-full">
          <h2 className="text-3xl md:text-[34px] font-bold text-[#1e293b] text-center mb-20 tracking-tight">
            How We Work
          </h2>
          
          <div className="flex flex-col md:flex-row relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-[18px] left-[8%] right-[8%] h-[2px] bg-slate-300/80 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex-1 relative z-10 flex flex-col items-center text-center px-1 lg:px-3 mb-12 md:mb-0">
                {/* Connecting Line for Mobile (vertical) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[44px] bottom-[-24px] left-1/2 w-[2px] bg-slate-300/80 -translate-x-1/2 -z-10"></div>
                )}
                
                <div className="bg-[#f2f6fc] px-4 lg:px-6 mb-5">
                  <span className="text-[26px] lg:text-[28px] font-bold text-[#0f172a] inline-block tracking-tight">{step.num}</span>
                </div>
                
                <h3 className="text-[16px] lg:text-[17px] font-bold text-[#1e293b] mb-4">{step.title}</h3>
                
                <p className="text-[12.5px] lg:text-[13px] text-slate-500 leading-relaxed font-medium max-w-[200px]">
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
