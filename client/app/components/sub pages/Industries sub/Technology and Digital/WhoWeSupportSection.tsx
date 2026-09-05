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
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: WHO WE SUPPORT */}
        <div className="mb-10">
          <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase block mb-3">
            WHO WE SUPPORT
          </span>
          <div className="flex flex-wrap items-center gap-y-2 text-[#0f172a] font-semibold text-[14px] sm:text-[15px]">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center">
                <span>{cat}</span>
                {idx < categories.length - 1 && (
                  <span className="text-gray-400 mx-3 sm:mx-4 font-normal">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Left Image, Right Service List */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Technology and Digital/operations-coordination.png"
                alt="Who We Support Operations & Coordination"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: 6 Operations Items */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <div className="flex flex-col space-y-1">
              {services.map((service, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-gray-100 py-3.5 text-[#0f172a] font-semibold text-[14px] sm:text-[15px]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
