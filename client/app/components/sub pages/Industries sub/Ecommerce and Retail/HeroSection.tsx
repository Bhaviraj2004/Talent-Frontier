import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Industries/Ecommerce and Retail/hero-bg.jpg"
          alt="E-commerce & Retail"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text contrast matching screenshot */}
        <div className="absolute inset-0 bg-[#071124]/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
          E-commerce &amp;<br />Retail
        </h1>
      </div>
    </section>
  );
}
