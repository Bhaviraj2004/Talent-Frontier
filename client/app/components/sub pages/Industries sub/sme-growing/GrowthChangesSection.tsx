import Image from 'next/image';

export default function GrowthChangesSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-3xl md:text-[36px] font-bold text-[#0f172a] leading-[1.15] tracking-tight">
            Growth Changes What Your Business Needs
          </h2>
        </div>

        {/* Middle Text */}
        <div className="w-full lg:w-1/3">
          <p className="text-[#64748b] text-[15px] leading-relaxed">
            As your business grows, so do the moving parts. We provide practical support that helps you stay organised, keep your team focused and maintain momentum.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 relative h-[220px] md:h-[260px] rounded-[2rem] overflow-hidden shadow-md">
          <Image
            src="/sub pages/Industries/SMEs & Growing Businesses/Support image placeholder (1).png"
            alt="Growth Support"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
