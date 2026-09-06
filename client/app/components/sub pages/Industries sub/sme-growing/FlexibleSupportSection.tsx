import Image from 'next/image';
import Link from 'next/link';

export default function FlexibleSupportSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <p className="text-[#1d4ed8] font-bold text-xs uppercase tracking-wider mb-4">
            SMES & GROWING BUSINESSES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-6">
            Flexible Support for Businesses Ready to Grow
          </h2>
          <p className="text-[#64748b] text-base md:text-[15px] leading-relaxed mb-10 max-w-[420px]">
            Practical support that helps your team manage workload, strengthen operations and respond to changing priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="bg-[#1d4ed8] hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-md text-[13px] text-center transition-colors shadow-sm">
              Discuss Your Business Needs
            </Link>
            <Link href="/services" className="bg-white border border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 font-semibold py-3.5 px-6 rounded-md text-[13px] text-center transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative h-[350px] md:h-[420px] lg:h-[480px] rounded-[2rem] overflow-hidden shadow-lg">
          <Image
            src="/sub pages/Industries/SMEs & Growing Businesses/Rectangle 138.png"
            alt="Flexible Support"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
