import Image from 'next/image';

export default function BuiltAroundSystems() {
  const systems = [
    'Accounting Software',
    'Access Permissions',
    'Approval Authorities',
    'Security Requirements',
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Finance and Accounting/built-around-systems.png"
                alt="Built Around Your Systems"
                fill
                className="object-cover"
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

            <div className="flex flex-col space-y-1 mb-6">
              {systems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-gray-200 py-3 text-[#0f172a] font-semibold text-[14px] sm:text-[15px]"
                >
                  {item}
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
