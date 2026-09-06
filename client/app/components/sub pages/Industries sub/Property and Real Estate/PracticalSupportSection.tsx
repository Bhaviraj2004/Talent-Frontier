import Image from 'next/image';
import Link from 'next/link';

export default function PracticalSupportSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
          
          {/* Left Dark Navy Card */}
          <div className="w-full lg:w-[50%] bg-[#0a1835] rounded-[24px] md:rounded-[32px] p-8 sm:p-12 flex flex-col justify-center shadow-xl">
            <span className="text-[#3b82f6] text-[12px] font-bold tracking-wider uppercase mb-3">
              PROPERTY &amp; REAL ESTATE
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-[1.2] mb-4 tracking-tight">
              Practical Support for Property and Real Estate Businesses
            </h2>
            
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-lg">
              Structured support for administration, property coordination, marketing and everyday operations.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-[13px] transition-colors shadow-md text-center"
              >
                Discuss Your Property Needs
              </Link>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-100 text-[#1d4ed8] px-6 py-3 rounded-md font-semibold text-[13px] transition-colors shadow text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full min-h-[340px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg">
              <Image
                src="/sub pages/Industries/Property and Real Estate/practical-support.png"
                alt="Practical Support for Property and Real Estate Businesses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
