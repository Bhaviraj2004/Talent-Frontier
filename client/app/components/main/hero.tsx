import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden flex flex-col font-sans">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* We use the provided hero image. Adjust object-position if needed based on the actual image proportions */}
        <Image 
          src="/main%20page/hero.png" 
          alt="Talent Frontier Hero Background" 
          fill
          className="object-cover object-right md:object-center opacity-90"
          priority
        />
        {/* Dark gradient overlay to ensure text readability on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent md:w-2/3"></div>
      </div>


      {/* Hero Main Content */}
      <main className="relative z-10 flex-grow flex items-center px-6 md:px-12 max-w-[1400px] mx-auto w-full pb-20">
        <div className="max-w-2xl mt-8">
          <p className="text-[#3b82f6] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
            Client-First Recruitment
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            The <span className="italic font-serif font-light text-gray-100">Right Talent</span><br />
            for Your Growing<br />
            Business.
          </h1>
          
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-lg mb-10 leading-relaxed font-light">
            We help Australian businesses identify, screen and connect with skilled professionals through a streamlined recruitment process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button className="bg-[#2563eb] hover:bg-blue-600 text-white px-8 py-3.5 rounded-lg font-medium text-base transition-all shadow-lg shadow-blue-500/30">
              Hire Talent
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-3.5 rounded-lg font-medium text-base transition-all">
              Talk to Our Team
            </button>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs md:text-sm text-gray-400 font-medium">
            <span>Employer-Focused Recruitment</span>
            <span className="w-1 h-1 rounded-full bg-gray-500 hidden sm:block"></span>
            <span>Structured Screening</span>
            <span className="w-1 h-1 rounded-full bg-gray-500 hidden sm:block"></span>
            <span>Transparent Process</span>
          </div>
        </div>
      </main>
    </div>
  );
}
