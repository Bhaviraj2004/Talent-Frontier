import Image from 'next/image';

export default function HowWeSupportYou() {
  const leftItems = [
    { num: '01', title: 'Business Administration' },
    { num: '02', title: 'Client Coordination' },
    { num: '03', People: true, title: 'People & Operations' },
  ];

  const rightItems = [
    { num: '04', title: 'Finance Administration' },
    { num: '05', title: 'Technology & CRM' },
    { num: '06', title: 'Marketing & Creative' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] text-center mb-12 tracking-tight">
          How We Can Support You
        </h2>

        {/* 3-Column Layout: Left List, Center Image, Right List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left List */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-3 sm:space-y-4 order-2 lg:order-1">
            {leftItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-3.5 sm:p-4 rounded-xl cursor-pointer flex items-center gap-3.5 group"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300 text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">
                  {item.num}
                </span>
                <span className="text-[#0f172a] group-hover:text-blue-600 font-semibold text-[13.5px] sm:text-[14.5px] leading-snug transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[580px] aspect-[718/316] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md group">
              <Image
                src="/sub pages/Industries/Professional Services/how-we-support.png"
                alt="How We Can Support You"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
          </div>

          {/* Right List */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-3 sm:space-y-4 order-3">
            {rightItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-3.5 sm:p-4 rounded-xl cursor-pointer flex items-center gap-3.5 group"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors duration-300 text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">
                  {item.num}
                </span>
                <span className="text-[#0f172a] group-hover:text-blue-600 font-semibold text-[13.5px] sm:text-[14.5px] leading-snug transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
