import Image from 'next/image';

export default function SupportNeedsSection() {
  const services = [
    { num: "01", title: "Business Administration", desc: "Everything organised" },
    { num: "02", title: "People & Operations", desc: "Team coordination" },
    { num: "03", title: "Finance Support", desc: "Routine administration" },
    { num: "04", title: "Technology & Systems", desc: "Better digital workflows" },
    { num: "05", title: "Marketing & Creative", desc: "Consistent communication" },
    { num: "06", title: "Process Automation", desc: "Less repetitive work" },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Col */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <h2 className="text-3xl md:text-[34px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-8 max-w-sm">
            Support Where Your Business Needs It Most
          </h2>
          <div className="relative w-full aspect-[420/285] rounded-[2rem] overflow-hidden shadow-md mt-auto group">
            <Image
              src="/sub pages/Industries/SMEs & Growing Businesses/Support image placeholder.png"
              alt="Support Needs"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Middle Col - Cards List */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <div className="flex flex-col space-y-3">
            {services.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/80 hover:bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer flex items-start gap-3.5"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                  {item.num}
                </span>
                <div className="flex flex-col">
                  <h4 className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14px] sm:text-[15px] leading-snug transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-1/3 flex items-center justify-center">
          <div className="relative w-full aspect-[404/408] lg:aspect-auto lg:h-full min-h-[260px] rounded-[2rem] overflow-hidden shadow-lg group">
            <Image
              src="/sub pages/Industries/SMEs & Growing Businesses/Support right image placeholder.png"
              alt="Support Workflow"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
