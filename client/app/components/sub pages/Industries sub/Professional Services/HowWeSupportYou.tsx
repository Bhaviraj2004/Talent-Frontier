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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left List */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8 sm:space-y-12 lg:space-y-14 order-2 lg:order-1">
            {leftItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <span className="text-[#2563eb] text-xl sm:text-2xl font-bold tracking-tight min-w-[32px]">
                  {item.num}
                </span>
                <span className="text-[#0f172a] font-semibold text-[14px] sm:text-[15px] leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[580px] h-[240px] sm:h-[300px] md:h-[340px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Professional Services/how-we-support.png"
                alt="How We Can Support You"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>
          </div>

          {/* Right List */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-8 sm:space-y-12 lg:space-y-14 order-3">
            {rightItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <span className="text-[#2563eb] text-xl sm:text-2xl font-bold tracking-tight min-w-[32px]">
                  {item.num}
                </span>
                <span className="text-[#0f172a] font-semibold text-[14px] sm:text-[15px] leading-snug">
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
