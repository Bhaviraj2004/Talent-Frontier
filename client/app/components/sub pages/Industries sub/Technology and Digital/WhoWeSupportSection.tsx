import Image from 'next/image';

export default function WhoWeSupportSection() {
  const categories = [
    'Software Businesses',
    'Digital Agencies',
    'SaaS Teams',
    'Online Platforms',
    'Product Teams',
  ];

  const services = [
    'Business Operations',
    'Project Coordination',
    'CRM Support',
    'Technology Administration',
    'Digital Content',
    'Process Automation',
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: WHO WE SUPPORT */}
        <div className="mb-6 sm:mb-8">
          <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase block mb-3">
            WHO WE SUPPORT
          </span>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
            {categories.map((cat, idx) => (
              <span 
                key={idx} 
                className="bg-slate-50 hover:bg-[#2563eb] text-[#0f172a] hover:text-white border border-slate-200/80 hover:border-[#2563eb] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Left Image, Right Service List */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full aspect-[579/315] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md group">
              <Image
                src="/sub pages/Industries/Technology and Digital/operations-coordination.png"
                alt="Who We Support Operations & Coordination"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: 6 Operations Items Cards */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/80 hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-3 cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center shrink-0 transition-colors duration-300">
                    0{idx + 1}
                  </span>
                  <span className="text-[#0f172a] group-hover:text-blue-600 font-semibold text-[13.5px] sm:text-[14.5px] leading-snug transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
