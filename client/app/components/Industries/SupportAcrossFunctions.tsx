import Image from 'next/image';

const functions = [
  { num: '01', title: 'Business administration' },
  { num: '02', title: 'People and operations' },
  { num: '03', title: 'Finance and accounting processes' },
  { num: '04', title: 'Technology, IT and AI' },
  { num: '05', title: 'Brand, marketing and creative' },
  { num: '06', title: 'Process improvement and automation' }
];

export default function SupportAcrossFunctions() {
  return (
    <section className="relative w-full py-16 md:py-20 font-sans overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#041133]">
        <Image 
          src="/Industries page/Rectangle 20.png" 
          alt="Support across functions background" 
          fill
          className="object-cover opacity-30 mix-blend-luminosity object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041133] via-[#041133]/95 to-[#041133]/50 w-full"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col xl:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Title */}
        <div className="w-full xl:w-[25%] flex-shrink-0">
          <h2 className="text-[28px] md:text-[34px] font-bold text-white leading-[1.2] tracking-tight">
            Support Across<br className="hidden xl:block"/> Business Functions
          </h2>
        </div>

        {/* Right List */}
        <div className="w-full xl:w-[75%]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
            {functions.map((func, idx) => (
              <div key={idx} className={`flex flex-col px-4 md:px-6 py-4 ${idx !== 0 && idx !== 2 && idx !== 4 ? 'border-l border-white/20' : 'lg:border-l lg:border-white/20'} ${idx === 0 ? 'lg:border-l-0' : ''}`}>
                <span className="text-white text-[24px] font-medium leading-none mb-4">{func.num}</span>
                <h4 className="text-white text-[12px] md:text-[13px] font-bold leading-snug pr-2">
                  {func.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
