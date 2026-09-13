import Image from 'next/image';

export default function BuiltAroundTechSection() {
  const items = [
    { title: 'Business Systems', desc: 'Integrated workflows with your core business tech stack' },
    { title: 'Project Tools', desc: 'Coordination across Jira, Asana, Monday & ClickUp' },
    { title: 'CRM Platforms', desc: 'HubSpot, Salesforce and customer database alignment' },
    { title: 'Digital Workspaces', desc: 'Slack, Notion, Google Workspace & Microsoft 365' },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Developer Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full aspect-[742/286] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md group">
              <Image
                src="/sub pages/Industries/Technology and Digital/built-around-tech.png"
                alt="Built Around Your Technology"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: Technology Platforms List */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-3 tracking-tight">
              Built Around Your Technology
            </h2>
            <p className="text-[#64748b] text-[13px] sm:text-[14px] leading-relaxed mb-6">
              We integrate seamlessly into your established tools, security protocols and communication channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/80 hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-start gap-3 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#2563eb] group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#0f172a] font-semibold text-[14px] sm:text-[15px] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#64748b] text-[12px] leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
