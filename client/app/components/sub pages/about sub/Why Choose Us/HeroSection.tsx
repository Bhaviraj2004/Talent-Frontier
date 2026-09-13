import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[1438/659] sm:aspect-auto sm:h-[340px] md:h-[460px] lg:h-[560px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/About/Why Choose Us/ChatGPT Image Sep 2, 2026, 10_22_14 AM 1.png"
          alt="Why Choose Us"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <p className="text-blue-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3">
          ABOUT TALENT FRONTIER
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Why Choose Us
        </h1>
      </div>
    </section>
  );
}
