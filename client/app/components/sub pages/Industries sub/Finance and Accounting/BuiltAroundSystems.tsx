import Image from 'next/image';

export default function BuiltAroundSystems() {
  const systems = [
    {
      title: 'Accounting Software',
      desc: 'Seamless operation within your chosen platforms',
    },
    {
      title: 'Access Permissions',
      desc: 'Granular, role-based controls and security',
    },
    {
      title: 'Approval Authorities',
      desc: 'Strict multi-tier review and sign-off rules',
    },
    {
      title: 'Security Requirements',
      desc: 'Adherence to enterprise compliance standards',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full aspect-[700/296] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Finance and Accounting/built-around-systems.png"
                alt="Built Around Your Systems"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: Systems and Permissions List */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-2 tracking-tight">
              Built Around Your Systems
            </h2>
            
            <p className="text-[#64748b] text-[13px] sm:text-[14px] leading-relaxed mb-6">
              We work within approved systems, permissions and review procedures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {systems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/80 hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md transition-all duration-300 group flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
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

            <p className="text-[#2563eb] text-[12.5px] sm:text-[13px] font-medium">
              Final decisions and approvals remain with authorised personnel.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
