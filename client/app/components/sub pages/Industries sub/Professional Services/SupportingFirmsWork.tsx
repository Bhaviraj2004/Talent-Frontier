import Image from 'next/image';

export default function SupportingFirmsWork() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
          
          {/* Left Text Side */}
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-[1.2] mb-5 tracking-tight">
              Supporting the Way Professional Firms Work
            </h2>
            <p className="text-[#475569] text-[15px] leading-relaxed max-w-[480px]">
              Clear processes, organised information and reliable coordination help your team deliver with confidence.
            </p>
          </div>

          {/* Right Image Side */}
          <div className="w-full md:w-[55%] flex items-center justify-center">
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-md">
              <Image
                src="/sub pages/Industries/Professional Services/supporting-firms.png"
                alt="Supporting the Way Professional Firms Work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
