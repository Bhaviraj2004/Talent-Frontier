import Image from 'next/image';

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] bg-[#020617] overflow-hidden flex items-center font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Services page/ChatGPT Image Sep 1, 2026, 06_42_51 PM 1 (1).png"
          alt="Business Support Services" 
          fill
          className="object-cover object-[70%_center] md:object-right opacity-90"
          priority
        />
        {/* Gradient Overlay for text readability on mobile and left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010921] via-[#010921]/90 md:via-[#010921]/70 to-transparent w-full md:w-3/4 lg:w-[60%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col">
        <div className="max-w-[600px] mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Business Support<br />
            Build Around<br />
            <span className="italic font-serif font-light text-gray-100">Your Growth</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-[15px] lg:text-base max-w-[500px] mb-10 leading-relaxed font-light">
            From daily operations and people support to finance, technology, marketing and automation, we provide structured business support designed around your organisation's requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button className="bg-[#2563eb] hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-colors shadow-lg shadow-blue-500/20 text-center">
              Discuss Your Business Needs
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#2563eb] px-8 py-3.5 rounded-md font-semibold text-sm transition-colors text-center shadow-md">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
