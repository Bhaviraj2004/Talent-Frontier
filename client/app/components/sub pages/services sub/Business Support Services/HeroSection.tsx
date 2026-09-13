import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] min-h-[220px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/Business Support Services/ChatGPT Image Sep 2, 2026, 11_16_12 AM 1.png"
          alt="Business Support Services"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Business Support <br /> Services
        </h1>
      </div>
    </section>
  );
}
