import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row gap-16 items-center border-b border-gray-200 pb-24">
      <div className="w-full md:w-[45%] flex flex-col">
        <h2 className="text-2xl md:text-[28px] font-bold mb-10 text-[#091535]">
          How We Can Support You
        </h2>
        <div className="flex flex-col">
          {[
            { num: "01", title: "Process Review", desc: "Understand the current workflow." },
            { num: "02", title: "Workflow Mapping", desc: "Clarify activities and approvals." },
            { num: "03", title: "Process Documentation", desc: "Create SOPs and checklists." },
            { num: "04", title: "Repetitive Task Identification", desc: "Find suitable routine activities." },
            { num: "05", title: "Workflow Automation", desc: "Automate where value is clear." },
            { num: "06", title: "System Integration Support", desc: "Connect compatible platforms." },
            { num: "07", title: "Monitoring & Improvement", desc: "Review and refine over time." },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-4">
                <span className="text-[#1150fb] font-semibold text-[15px] w-6">{item.num}</span>
                <span className="font-bold text-[#091535] text-[14px]">{item.title}</span>
              </div>
              <span className="text-gray-500 text-[13px]">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[55%] relative h-[400px] md:h-auto min-h-[500px]">
        <Image
          src="/sub pages/Services/Process & Automation Support/Editable Shape (2).png"
          alt="How We Can Support You"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
}
