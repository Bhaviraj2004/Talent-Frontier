import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center border-b border-gray-200 pb-12 sm:pb-20">
      <div className="w-full md:w-[50%] flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-6 sm:mb-8 text-[#091535] text-center md:text-left">
          How We Can Support You
        </h2>
        <div className="flex flex-col space-y-2.5">
          {[
            { num: "01", title: "Process Review", desc: "Understand the current workflow." },
            { num: "02", title: "Workflow Mapping", desc: "Clarify activities and approvals." },
            { num: "03", title: "Process Documentation", desc: "Create SOPs and checklists." },
            { num: "04", title: "Repetitive Task Identification", desc: "Find suitable routine activities." },
            { num: "05", title: "Workflow Automation", desc: "Automate where value is clear." },
            { num: "06", title: "System Integration Support", desc: "Connect compatible platforms." },
            { num: "07", title: "Monitoring & Improvement", desc: "Review and refine over time." },
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center shrink-0 group-hover:bg-[#1150fb] group-hover:text-white transition-colors">
                  {item.num}
                </span>
                <span className="font-bold text-[#091535] text-sm group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </span>
              </div>
              <span className="text-gray-500 text-xs sm:text-[13px] pl-10 sm:pl-0 sm:text-right">
                {item.desc}
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
