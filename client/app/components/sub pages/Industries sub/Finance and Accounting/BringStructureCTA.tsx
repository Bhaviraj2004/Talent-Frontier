import Image from 'next/image';
import Link from 'next/link';

export default function BringStructureCTA() {
  return (
    <section className="w-full bg-white pt-8 pb-16 md:pb-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1b68f8] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between shadow-xl">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[50%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.15] mb-4 tracking-tight">
              Bring Greater Structure to<br />
              Your Finance Operations
            </h2>
            
            <p className="text-white/90 text-[15px] sm:text-[16px] mb-8 font-normal">
              Tell us about your current workload and support requirements.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-white text-[#1b68f8] hover:bg-gray-100 px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Discuss Your Finance Needs
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors text-center"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[50%] relative h-[280px] sm:h-[360px] lg:h-[440px]">
            <Image
              src="/sub pages/Industries/Finance and Accounting/finance-cta.png"
              alt="Bring Greater Structure to Your Finance Operations"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 680px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
