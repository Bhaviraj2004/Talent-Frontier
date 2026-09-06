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
            <div className="relative w-full h-[300px] sm:h-[380px] md:h-[440px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-lg">
              <Image
                src="/sub pages/Industries/Property and Real Estate/lifecycle-support.png"
                alt="Support Across Your Property Operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: Title and 6 Services in 2 Sub-columns */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <div className="w-8 h-[3px] bg-[#2563eb] mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-8 tracking-tight">
              Support Across Your<br />
              Property Operations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Sub-column 1: 01, 02, 03 */}
              <div className="flex flex-col space-y-6">
                {leftItems.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-5">
                    <div className="flex items-start gap-4">
                      <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold tracking-tight min-w-[36px]">
                        {item.num}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#0f172a] font-bold text-[14px] sm:text-[15px] leading-snug">
                          {item.title}
                        </span>
                        <span className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sub-column 2: 04, 05, 06 */}
              <div className="flex flex-col space-y-6">
                {rightItems.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-5">
                    <div className="flex items-start gap-4">
                      <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold tracking-tight min-w-[36px]">
                        {item.num}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[#0f172a] font-bold text-[14px] sm:text-[15px] leading-snug">
                          {item.title}
                        </span>
                        <span className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5">
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
