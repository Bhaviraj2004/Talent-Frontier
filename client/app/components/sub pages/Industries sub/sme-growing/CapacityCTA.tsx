import Image from 'next/image';
import Link from 'next/link';

export default function CapacityCTA() {
  return (
    <section className="w-full bg-[#f4f7fa] py-16 md:py-24 font-sans border-t border-blue-600">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-lg">
          <Image
            src="/sub pages/Industries/SMEs & Growing Businesses/CTA image placeholder.png"
            alt="Create More Capacity"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-[1.15] tracking-tight mb-6 max-w-lg">
            Create More Capacity<br />for What Comes Next
          </h2>
          <p className="text-[#64748b] text-[15px] leading-relaxed mb-10 max-w-md">
            Tell us about your workload, priorities and plans for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/contact" className="bg-[#1d4ed8] hover:bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-md text-[13px] text-center transition-colors shadow-sm">
              Discuss Your Business Needs
            </Link>
            <Link href="/contact" className="bg-white border border-[#1d4ed8] text-[#1d4ed8] hover:bg-blue-50 font-semibold py-3.5 px-6 rounded-md text-[13px] text-center transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
