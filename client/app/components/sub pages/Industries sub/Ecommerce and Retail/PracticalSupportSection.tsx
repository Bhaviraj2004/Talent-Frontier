import Image from 'next/image';
import Link from 'next/link';

export default function PracticalSupportSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
          
          {/* Left Side: 4-Quadrant Image Collage */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-full min-h-[380px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg">
              <Image
                src="/sub pages/Industries/Ecommerce and Retail/practical-support.png"
                alt="Practical Support for Growing Commerce Businesses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

          {/* Right Side: Light Periwinkle Rounded Card */}
          <div className="w-full lg:w-[52%] bg-[#dbe7f7] rounded-[24px] md:rounded-[32px] p-8 sm:p-12 lg:p-14 flex flex-col justify-center shadow-md">
            <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase mb-3">
              E-COMMERCE &amp; RETAIL
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0a1835] leading-[1.2] mb-5 tracking-tight">
              Practical Support<br />
              for Growing<br />
              Commerce<br />
              Businesses
            </h2>
            
            <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-md">
              Flexible support for product administration, customer coordination, marketing and everyday operations.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Discuss Your Business Needs
              </Link>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-50 text-[#1d4ed8] border border-transparent px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
