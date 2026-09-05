import Image from 'next/image';
import Link from 'next/link';

export default function StructuredSupportSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center">
            <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase mb-3">
              FINANCE &amp; ACCOUNTING
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-[1.2] mb-4 tracking-tight">
              Structured Support for Finance and Accounting Teams
            </h2>
            
            <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-lg">
              Practical support for organised records, consistent processes and better operational visibility.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-[13px] transition-colors shadow-md text-center"
              >
                Discuss Your Finance Needs
              </Link>
              <Link
                href="/services"
                className="bg-[#0a1835] hover:bg-[#122247] text-white px-6 py-3 rounded-md font-semibold text-[13px] transition-colors text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[52%] flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-lg">
              <Image
                src="/sub pages/Industries/Finance and Accounting/structured-support.png"
                alt="Structured Support for Finance and Accounting Teams"
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
