import Image from 'next/image';

export default function TestimonialsHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] bg-[#02091a] overflow-hidden flex items-center font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Testimonials page/ChatGPT Image Sep 1, 2026, 10_18_12 PM 1.png"
          alt="Business Relationships" 
          fill
          className="object-cover object-right opacity-90"
          priority
        />
        {/* Gradient Overlay for text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02091a] via-[#02091a]/95 md:via-[#02091a]/80 to-transparent w-full md:w-[70%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col py-16 sm:py-20">
        <div className="max-w-[650px] mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Trusted Support<br />
            Meaningful Business<br />
            <span className="italic font-serif font-light text-gray-200">Relationships</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-[15px] max-w-[480px] mb-10 sm:mb-12 leading-relaxed font-light">
            Discover how businesses have experienced Talent Frontier's structured, responsive and human-led approach to business support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="#client-feedback"
              className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20 text-center w-full sm:w-auto"
            >
              Read Client Testimonials
            </a>
            <a 
              href="#success-stories"
              className="bg-transparent hover:bg-[#101d42] border border-blue-900/50 text-[#3b82f6] px-8 py-3.5 rounded-md font-semibold text-sm transition-colors text-center w-full sm:w-auto"
            >
              Explore Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
