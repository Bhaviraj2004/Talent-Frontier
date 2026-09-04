import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="flex-1 max-w-xl">
          <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-5">About Talent Frontier</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
            Recruitment Built Around Your Business
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
            We connect growing businesses with the right talent through a structured, transparent and human-led recruitment approach.
          </p>
          <button className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-medium text-base transition-colors shadow-lg shadow-blue-500/30">
            Talk to Our Team
          </button>
        </div>
        
        <div className="flex-1 relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-2xl">
          {/* Decorative shapes behind image (mix-blend for styling) */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#1e1b4b] rounded-br-full z-10 opacity-80 mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#1d4ed8] rounded-tl-full z-10 opacity-80 mix-blend-multiply"></div>
          
          <Image src="/about%20page/heroteam.png" alt="Team Meeting" fill className="object-cover relative z-0" priority />
        </div>
      </div>
    </section>
  );
}
