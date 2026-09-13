import Image from 'next/image';

export default function OperationsSupportSection() {
  const leftItems = [
    { num: '01', title: 'Property Administration', subtitle: 'Records and documentation' },
    { num: '02', title: 'Listing Coordination', subtitle: 'Approved property information' },
    { num: '03', title: 'Client Communication', subtitle: 'Enquiries and follow-ups' },
  ];

  const rightItems = [
    { num: '04', title: 'Marketing Support', subtitle: 'Campaign and content coordination' },
    { num: '05', title: 'Inspection Scheduling', subtitle: 'Calendar and appointment support' },
    { num: '06', title: 'Process Improvement', subtitle: 'Clearer property workflows' },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Lifecycle Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full aspect-[620/440] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-lg group">
              <Image
                src="/sub pages/Industries/Property and Real Estate/lifecycle-support.png"
                alt="Support Across Your Property Operations"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: Title and 6 Services in Cards */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <div className="w-8 h-[3px] bg-[#2563eb] mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-8 tracking-tight">
              Support Across Your<br />
              Property Operations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {[...leftItems, ...rightItems].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/80 hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer flex items-start gap-3"
                >
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 transition-colors duration-300">
                    {item.num}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[13.5px] sm:text-[14.5px] leading-snug transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[#64748b] text-[12px] mt-0.5 leading-snug">
                      {item.subtitle}
                    </span>
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
