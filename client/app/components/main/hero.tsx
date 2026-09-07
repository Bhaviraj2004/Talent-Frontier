import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen bg-[#020617] overflow-hidden flex flex-col font-sans">
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
        <div className="absolute inset-0 bg-[#020617]/60 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/95 md:via-[#020617]/80 to-transparent w-full md:w-3/4"></div>
      </div>

      {/* Hero Main Content */}
      <main className="relative z-10 flex-grow flex items-center px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto w-full py-16 md:py-20">
        <div className="max-w-2xl mt-4 md:mt-8">
          <p className="text-[#3b82f6] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6">
            Business First Priority
          </p>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] md:leading-[1.1] mb-6 tracking-tight">
            The <span className="italic font-serif font-light text-gray-100">Right Talent</span><br />
            for Your Growing<br />
            Business.
          </h1>
          
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mb-8 md:mb-10 leading-relaxed font-light">
            We Help Businesses to identify, screen and connect with skilled professionals through a streamlined recruitment process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-16">
            <Link 
              href="/services"
              className="bg-[#1d4ed8] hover:bg-blue-600 active:bg-blue-400 active:scale-[0.98] active:brightness-110 hover:shadow-blue-600/40 hover:-translate-y-0.5 text-white px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 shadow-lg shadow-blue-900/50 text-center w-full sm:w-auto"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/contact"
              className="bg-white hover:bg-slate-100 active:bg-blue-50 active:scale-[0.98] hover:shadow-white/20 hover:-translate-y-0.5 text-[#1d4ed8] px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 shadow-lg text-center w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
          </div>
          
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm md:text-base text-gray-300 font-medium">
            <div className="flex items-center gap-2.5 group">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
              <span className="group-hover:text-white transition-colors duration-200">Business-Focused Support</span>
            </div>
            <div className="flex items-center gap-2.5 group">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
              <span className="group-hover:text-white transition-colors duration-200">Coordinated Expertise</span>
            </div>
            <div className="flex items-center gap-2.5 group">
              <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
              <span className="group-hover:text-white transition-colors duration-200">Transparent Communication</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
