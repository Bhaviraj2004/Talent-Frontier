import Image from 'next/image';
import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] lg:h-[650px] bg-[#010921] overflow-hidden flex items-center font-sans py-14 md:py-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Services page/ChatGPT Image Sep 1, 2026, 06_42_51 PM 1 (1).png"
          alt="Business Support Services" 
          fill
          className="object-cover object-[75%_center] md:object-right opacity-90"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-[#010921]/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010921] via-[#010921]/85 md:via-[#010921]/70 to-transparent w-full md:w-3/4 lg:w-[60%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col">
        <div className="max-w-[600px] mt-4 md:mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] md:leading-[1.1] mb-4 sm:mb-6 tracking-tight">
            Business Support<br />
            Build Around<br />
            <span className="italic font-serif font-light text-gray-100">Your Growth</span>
          </h1>
          
          <p className="text-gray-200 text-sm md:text-[15px] lg:text-base max-w-[500px] mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light drop-shadow-sm">
            From daily operations and people support to finance, technology, marketing and automation, we provide structured business support designed around your organisation&apos;s requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Link 
              href="/contact"
              className="bg-[#2563eb] hover:bg-blue-600 active:scale-[0.98] text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 text-center w-full sm:w-auto"
            >
              Discuss Your Business Needs
            </Link>
            <Link 
              href="/services"
              className="bg-white hover:bg-gray-100 active:scale-[0.98] text-[#2563eb] px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-300 text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
