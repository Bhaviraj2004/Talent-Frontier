import Image from 'next/image';
import Link from 'next/link';

export default function CapacityCTA() {
  return (
    <section className="w-full bg-[#08154a] py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
          <Image
            src="/sub pages/Industries/SMEs & Growing Businesses/CTA image placeholder.png"
            alt="Create More Capacity"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] tracking-tight mb-6 max-w-lg">
            Create More Capacity<br />for What Comes Next
          </h2>
          <p className="text-slate-300 text-[15px] leading-relaxed mb-10 max-w-md">
            Tell us about your workload, priorities and plans for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="bg-white hover:bg-gray-100 active:bg-blue-50 active:scale-[0.98] active:brightness-105 text-[#08154a] font-semibold py-3.5 px-6 rounded-md text-[13px] text-center transition-all shadow-md">
              Discuss Your Business Needs
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-white/10 active:bg-white/20 active:scale-[0.98] text-white border border-white/40 font-semibold py-3.5 px-6 rounded-md text-[13px] text-center transition-all">
              Talk to Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
