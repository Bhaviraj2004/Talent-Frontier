import Image from 'next/image';

export default function KeepCommerceMovingSection() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text */}
          <div className="w-full lg:w-[35%] xl:w-[32%] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0f172a] leading-tight mb-4 tracking-tight">
              Keep Your<br />
              Commerce<br />
              Operations Moving
            </h2>
            <p className="text-[#64748b] text-[13px] sm:text-[14px] leading-relaxed max-w-sm">
              We help commerce teams stay organised, responsive and ready to grow.
            </p>
          </div>

          {/* Right Wide Image */}
          <div className="w-full lg:w-[65%] xl:w-[68%] flex items-center justify-center">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Ecommerce and Retail/commerce-moving.png"
                alt="Keep Your Commerce Operations Moving"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
