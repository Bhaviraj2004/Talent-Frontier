import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-center font-sans overflow-hidden bg-[#08154a]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/about page/ChatGPT Image Sep 1, 2026, 06_16_55 PM 1.png" 
          alt="About Hero Background" 
          fill 
          className="object-cover object-[70%_center] md:object-center opacity-90" 
          priority 
          sizes="100vw"
        />
        {/* Gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-[#08154a]/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08154a] via-[#08154a]/85 md:via-[#08154a]/80 to-transparent w-full md:w-3/4"></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-20 w-full text-white">
        <div className="max-w-2xl">
          <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
            ABOUT TALENT FRONTIER
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Business Support Built<br />
            Around <span className="font-serif italic font-light">Your Business</span>
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mb-8 sm:mb-10 leading-relaxed font-light drop-shadow-sm">
            We help growing businesses access the right expertise through a structured, transparent and client-focused support approach.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-200 text-center w-full sm:w-auto shadow-md"
            >
              Talk to Our Team
            </Link>
            <Link 
              href="/about/our-approach"
              className="inline-block bg-transparent border border-blue-400 text-blue-300 hover:bg-blue-900/30 active:scale-[0.98] px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-200 text-center w-full sm:w-auto"
            >
              Explore Our Approach
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
