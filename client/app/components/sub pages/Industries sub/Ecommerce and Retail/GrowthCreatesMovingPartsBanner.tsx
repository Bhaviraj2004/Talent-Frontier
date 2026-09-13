import Image from 'next/image';

export default function GrowthCreatesMovingPartsBanner() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[20px] md:rounded-[28px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl">
          
          {/* Left Dark Navy Box */}
          <div className="w-full lg:w-[45%] bg-[#0a1835] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold text-white leading-[1.2] mb-6 tracking-tight">
              Growth creates<br />
              more moving parts.
            </h2>
            
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {['Product Data', 'Customer Enquiries', 'Order Updates', 'Campaign Activity'].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 hover:border-blue-400/60 rounded-xl p-3 sm:p-3.5 text-xs sm:text-sm font-semibold text-white flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%] relative aspect-[753/276] lg:aspect-auto lg:min-h-[340px] group overflow-hidden">
            <Image
              src="/sub pages/Industries/Ecommerce and Retail/growth-moving-parts.png"
              alt="Growth creates more moving parts"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 750px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
