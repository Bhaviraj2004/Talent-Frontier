import Image from 'next/image';
import Link from 'next/link';

export default function IndustriesHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] bg-[#02091a] overflow-hidden flex items-center font-sans py-14 md:py-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Industries page/ChatGPT Image Sep 1, 2026, 07_18_41 PM 1.png"
          alt="Business Support Designed For Your Industry" 
          fill
          className="object-cover opacity-90 object-[68%_center] md:object-right"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-[#02091a]/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02091a] via-[#02091a]/85 md:via-[#02091a]/80 to-transparent w-full md:w-[70%] lg:w-[60%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col">
        <div className="max-w-[650px]">
          <p className="text-blue-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
            Talent Frontier - Industries
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] md:leading-[1.1] mb-4 sm:mb-6 tracking-tight">
            Business Support<br />
            Designed For<br />
            <span className="italic font-serif font-light text-gray-200">Your Industry</span>
          </h1>
          
          <p className="text-gray-200 text-[14px] md:text-[15px] max-w-[480px] mb-6 sm:mb-8 md:mb-12 leading-relaxed font-light drop-shadow-sm">
            Every industry operates differently. We provide flexible business support aligned with your workflows, priorities and growth requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Link 
              href="/contact"
              className="bg-[#1d4ed8] hover:bg-blue-600 active:scale-95 text-white px-8 py-3.5 rounded-md font-semibold text-[13px] transition-all duration-300 shadow-lg shadow-blue-500/20 text-center w-full sm:w-auto"
            >
              Discuss Your Business Needs
            </Link>
            <Link 
              href="/industries"
              className="bg-transparent hover:bg-white/10 active:scale-95 border border-white/20 text-[#60a5fa] hover:text-white px-8 py-3.5 rounded-md font-semibold text-[13px] transition-all duration-300 text-center w-full sm:w-auto"
            >
              Explore Industries
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
