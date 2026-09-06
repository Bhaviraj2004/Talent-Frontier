import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative w-full h-[600px] flex items-center font-sans">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/about page/ChatGPT Image Sep 1, 2026, 06_16_55 PM 1.png" 
          alt="About Hero Background" 
          fill 
          className="object-cover" 
          priority 
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08154a]/95 via-[#08154a]/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full text-white">
        <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-4">
          ABOUT TALENT FRONTIER
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-2xl">
          Business Support Built<br />
          Around <span className="font-serif italic font-light">Your Business</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
          We help growing businesses access the right expertise through a structured, transparent and client-focused support approach.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-semibold text-sm transition-colors">
            Talk to Our Team
          </button>
          <button className="bg-transparent border border-blue-600 text-blue-500 hover:bg-blue-900/30 px-8 py-3.5 rounded-md font-semibold text-sm transition-colors">
            Explore Our Approach
          </button>
        </div>
      </div>
    </section>
  );
}
