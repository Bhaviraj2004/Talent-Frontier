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
            
            <div className="text-gray-300 text-[13px] sm:text-[14px] font-normal leading-relaxed flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>Product Data</span>
              <span className="text-gray-500">|</span>
              <span>Customer Enquiries</span>
              <span className="text-gray-500">|</span>
              <span>Order Updates</span>
              <span className="text-gray-500">|</span>
              <span>Campaign Activity</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%] min-h-[280px] sm:min-h-[340px] relative">
            <Image
              src="/sub pages/Industries/Ecommerce and Retail/growth-moving-parts.png"
              alt="Growth creates more moving parts"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 750px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
