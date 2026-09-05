import Image from 'next/image';

export default function SupportBuiltAround() {
  const pillars = [
    {
      title: 'Clear Responsibilities',
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* User profile with checkmark / role badge */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 11l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Flexible Support',
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Supportive hands */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
    {
      title: 'Structured Processes',
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Document with structured checklist */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Human-Led Service',
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Human-led / collaborative people */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Image Side */}
          <div className="w-full lg:w-[48%] flex justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Professional Services/support-built-around.png"
                alt="Support Built Around Your Business"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

          {/* Right Text & 4 Pillars Side */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-3 tracking-tight">
              Support Built Around Your Business
            </h2>
            
            <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed mb-8">
              We align responsibilities, systems and workflows with your priorities.
            </p>

            {/* 4 Pillars in a row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start">
              {pillars.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-3 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[#0f172a] text-[12px] sm:text-[13px] font-bold leading-snug">
                    {item.title}
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
