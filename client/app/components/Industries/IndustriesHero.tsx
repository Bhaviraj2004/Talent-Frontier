import Image from 'next/image';

export default function IndustriesHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] bg-[#02091a] overflow-hidden flex items-center font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/Industries page/ChatGPT Image Sep 1, 2026, 07_18_41 PM 1.png"
          alt="Business Support Designed For Your Industry" 
          fill
          className="object-cover opacity-90 object-right"
          priority
        />
        {/* Gradient Overlay for text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02091a] via-[#02091a]/95 md:via-[#02091a]/80 to-transparent w-full md:w-[70%] lg:w-[60%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col py-20">
        <div className="max-w-[650px] mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Business Support<br />
            Designed For<br />
            <span className="italic font-serif font-light text-gray-200">Your Industry</span>
          </h1>
          
          <p className="text-gray-300 text-[14px] md:text-[15px] max-w-[480px] mb-12 leading-relaxed font-light">
            Every industry operates differently. We provide flexible business support aligned with your workflows, priorities and growth requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold text-[13px] transition-colors shadow-lg shadow-blue-500/20 text-center">
              Discuss Your Business Needs
            </button>
            <button className="bg-transparent hover:bg-white/5 border border-white/20 text-[#60a5fa] hover:text-white px-8 py-3.5 rounded-md font-semibold text-[13px] transition-colors text-center">
              Explore Industries
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
