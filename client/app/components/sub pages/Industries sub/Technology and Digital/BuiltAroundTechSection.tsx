import Image from 'next/image';

export default function BuiltAroundTechSection() {
  const items = [
    'Business Systems',
    'Project Tools',
    'CRM Platforms',
    'Digital Workspaces',
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Developer Image */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Technology and Digital/built-around-tech.png"
                alt="Built Around Your Technology"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: Technology Platforms List */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-6 tracking-tight">
              Built Around<br />
              Your Technology
            </h2>

            <div className="flex flex-col space-y-1">
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-gray-100 py-3.5 text-[#0f172a] font-semibold text-[14px] sm:text-[15px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
