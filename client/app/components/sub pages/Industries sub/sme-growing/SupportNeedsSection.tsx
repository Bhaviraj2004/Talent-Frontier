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
          <div className="relative w-full h-[250px] md:h-[300px] rounded-[2rem] overflow-hidden shadow-md mt-auto">
            <Image
              src="/sub pages/Industries/SMEs & Growing Businesses/Support image placeholder.png"
              alt="Support Needs"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Middle Col - List */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center">
          <div className="flex flex-col">
            {services.map((item, idx) => (
              <div key={idx} className="flex gap-6 py-5 border-t border-gray-100 first:border-t-0">
                <span className="text-[#1d4ed8] font-bold text-[15px] pt-0.5">{item.num}</span>
                <div className="flex flex-col">
                  <h4 className="text-[#0f172a] font-bold text-[15px] mb-1">{item.title}</h4>
                  <p className="text-[#64748b] text-[13px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col */}
        <div className="w-full lg:w-1/3">
          <div className="relative w-full h-full min-h-[400px] rounded-[2rem] overflow-hidden shadow-lg">
            <Image
              src="/sub pages/Industries/SMEs & Growing Businesses/Support right image placeholder.png"
              alt="Support Workflow"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
