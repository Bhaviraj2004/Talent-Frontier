import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-[#020617] overflow-hidden flex flex-col font-sans">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/main%20page/hero.png" 
          alt="Talent Frontier Hero Background" 
          fill
          className="object-cover object-right md:object-center opacity-90"
          priority
        />
        {/* Dark gradient overlay to ensure text readability on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent w-full md:w-3/4"></div>
      </div>

      {/* Hero Main Content */}
      <main className="relative z-10 flex-grow flex items-center px-6 md:px-12 max-w-[1400px] mx-auto w-full pt-12 pb-20">
        <div className="max-w-3xl mt-8">
          <p className="text-[#3b82f6] text-sm md:text-base font-bold tracking-wide mb-6">
            Business First Priority
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
            The <span className="italic font-serif font-light text-gray-100">Right Talent</span><br />
            for Your Growing<br />
            Business.
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg max-w-lg mb-12 leading-relaxed font-light">
            We Help Businesses to identify, screen and connect<br />
            with skilled professionals through a streamlined<br />
            recruitment process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button className="bg-[#1d4ed8] hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-blue-900/50">
              Explore Our Services
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#1d4ed8] px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg">
              Book a Consultation
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-gray-400 font-medium">
            <span>Business-Focused Support</span>
            <span className="text-gray-500 text-lg">&bull;</span>
            <span>Coordinated Expertise</span>
            <span className="text-gray-500 text-lg">&bull;</span>
            <span>Transparent Communication</span>
          </div>
        </div>
      </main>
    </div>
  );
}
