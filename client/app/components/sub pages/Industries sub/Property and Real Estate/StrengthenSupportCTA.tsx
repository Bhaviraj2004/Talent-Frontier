import Image from 'next/image';
import Link from 'next/link';

export default function StrengthenSupportCTA() {
  return (
    <section className="w-full bg-white pt-8 pb-16 md:pb-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex items-center p-4 sm:p-8 lg:p-12 shadow-xl">
          
          {/* Panoramic Apartment Background Image */}
          <Image
            src="/sub pages/Industries/Property and Real Estate/strengthen-support.png"
            alt="Strengthen the Support Behind Your Property Business"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1360px) 100vw, 1360px"
          />

          {/* Left Dark Navy Card */}
          <div className="relative z-10 w-full max-w-[540px] bg-[#0a1835] rounded-[20px] md:rounded-[24px] p-6 sm:p-10 md:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-[1.18] mb-4 tracking-tight">
              Strengthen the Support<br />
              Behind Your Property<br />
              Business
            </h2>
            
            <p className="text-gray-300 text-[13px] sm:text-[14px] mb-8 font-normal leading-relaxed">
              Tell us about your workload, systems and operational priorities.
            </p>
            
            <div className="flex flex-wrap gap-3.5 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Discuss Your Property Needs
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#1d4ed8] hover:bg-gray-100 px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
