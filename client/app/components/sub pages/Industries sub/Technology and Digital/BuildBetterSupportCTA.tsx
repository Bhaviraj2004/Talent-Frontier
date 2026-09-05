import Image from 'next/image';
import Link from 'next/link';

export default function BuildBetterSupportCTA() {
  return (
    <section className="w-full bg-white pt-8 pb-16 md:pb-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 lg:p-16 gap-8 lg:gap-12 shadow-xl">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-[1.15] mb-4 tracking-tight">
              Build Better Support<br />
              Around Your Digital Business
            </h2>
            
            <p className="text-gray-300 text-[14px] sm:text-[15px] mb-8 font-normal">
              Let&apos;s discuss how we can support your systems, workflows and team priorities.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Discuss Your Technology Needs
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#1d4ed8] hover:bg-gray-100 px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] flex items-center justify-center">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-[20px] md:rounded-[24px] overflow-hidden shadow-lg">
              <Image
                src="/sub pages/Industries/Technology and Digital/tech-cta.png"
                alt="Build Better Support Around Your Digital Business"
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
