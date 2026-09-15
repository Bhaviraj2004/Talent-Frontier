import Image from 'next/image';

export default function TestimonialsHero() {
  return (
    <section className="relative w-full min-h-[500px] md:h-[600px] lg:h-[650px] bg-[#02091a] overflow-hidden flex items-center font-sans py-14 md:py-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Testimonials page/ChatGPT Image Sep 1, 2026, 10_18_12 PM 1.png"
          alt="Business Relationships" 
          fill
          className="object-cover object-[75%_center] md:object-right opacity-90"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-[#02091a]/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02091a] via-[#02091a]/85 md:via-[#02091a]/80 to-transparent w-full md:w-[70%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col">
        <div className="max-w-[650px]">
          <p className="text-blue-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
            TESTIMONIALS TALENT FRONTIER
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
            Trusted Support<br />
            Meaningful Business<br />
            <span className="italic font-serif font-light text-gray-200">Relationships</span>
          </h1>
          
          <p className="text-gray-200 text-sm md:text-[15px] max-w-[480px] mb-6 sm:mb-8 md:mb-12 leading-relaxed font-light drop-shadow-sm">
            Discover how businesses have experienced Talent Frontier's structured, responsive and human-led approach to business support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="#client-feedback"
              className="bg-[#1d4ed8] hover:bg-blue-600 active:scale-95 text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-500/20 text-center w-full sm:w-auto"
            >
              Read Client Testimonials
            </a>
            <a 
              href="#success-stories"
              className="bg-transparent hover:bg-white/10 active:scale-95 border border-blue-900/50 text-[#3b82f6] hover:text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-all duration-300 text-center w-full sm:w-auto"
            >
              Explore Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
