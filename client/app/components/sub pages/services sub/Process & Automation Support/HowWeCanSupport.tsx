import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center border-b border-gray-200 pb-12 sm:pb-20">
      <div className="w-full md:w-[50%] flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-6 sm:mb-8 text-[#091535] text-center md:text-left">
          Areas They Can Support
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Workflow automation",
            "CRM configuration",
            "System integrations",
            "Process mapping",
            "Automated notifications",
            "Data workflows",
            "Business system configuration",
            "Reporting workflows",
            "Operational process improvement",
            "Repetitive task automation"
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex flex-row items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-[#1150fb] group-hover:text-white transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-bold text-[#091535] text-sm group-hover:text-blue-600 transition-colors leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[50%] relative aspect-[645/408] md:aspect-auto md:h-[480px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 self-stretch">
        <Image
          src="/sub pages/Services/Process & Automation Support/Editable Shape (2).png"
          alt="How We Can Support You"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
