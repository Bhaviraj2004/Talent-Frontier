import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] min-h-[220px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Industries/Property and Real Estate/hero-bg.png"
          alt="Property & Real Estate"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#071124]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-2xl sm:text-4xl md:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
          Property &amp; Real<br />Estate
        </h1>
      </div>
    </section>
  );
}
