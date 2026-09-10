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
    <section className="w-full bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-[#f8fafc] border border-slate-100 rounded-[32px] py-16 lg:py-20 px-6 md:px-10 lg:px-16 w-full shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
              A structured and transparent approach to ensure we deliver exactly what your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Big Number Background */}
                <div className="absolute -right-2 -top-4 text-[100px] font-black text-slate-50 group-hover:text-[#f0f4f8] transition-colors duration-500 select-none pointer-events-none leading-none">
                  {step.num}
                </div>
                
                {/* Small Number Badge */}
                <div className="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#2563eb] flex items-center justify-center text-lg font-bold mb-6 relative z-10 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                  {step.num}
                </div>
                
                <h3 className="text-lg md:text-[19px] font-bold text-[#1e293b] mb-3 relative z-10">{step.title}</h3>
                
                <p className="text-[14px] md:text-[15px] text-slate-500 leading-relaxed font-medium relative z-10">
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
