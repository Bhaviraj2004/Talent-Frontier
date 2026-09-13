import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[1440/667] sm:aspect-auto sm:h-[340px] md:h-[480px] lg:h-[580px] flex items-center justify-center overflow-hidden bg-[#0A1128]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/About/Our Approach/ChatGPT Image Sep 2, 2026, 10_02_51 AM 1.png"
          alt="Our Approach Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A1128]/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-blue-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3">
          ABOUT TALENT FRONTIER
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Our Approach
        </h1>
      </div>
    </section>
  );
}
