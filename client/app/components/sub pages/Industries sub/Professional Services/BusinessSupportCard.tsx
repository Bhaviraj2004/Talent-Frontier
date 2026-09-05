import Image from 'next/image';
import Link from 'next/link';

export default function BusinessSupportCard() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 gap-8 lg:gap-12 shadow-xl">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <span className="text-[#3b82f6] text-[12px] font-bold tracking-wider uppercase mb-3">
              PROFESSIONAL SERVICES
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.2] mb-4">
              Business Support for Professional Service Firms
            </h2>
            
            <p className="text-gray-300 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-lg font-normal">
              Flexible support that helps your team stay organised and focused on client value.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-[13px] transition-colors shadow-md text-center"
              >
                Discuss Your Business Needs
              </Link>
              <Link
                href="/services"
                className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-6 py-3 rounded-md font-semibold text-[13px] transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-lg">
              <Image
                src="/sub pages/Industries/Professional Services/business-support.png"
                alt="Business Support for Professional Service Firms"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 650px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
