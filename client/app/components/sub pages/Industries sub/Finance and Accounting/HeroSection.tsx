import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] lg:h-[620px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Industries/Finance and Accounting/hero-bg.png"
          alt="Finance & Accounting"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#071124]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Title */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.1]">
          Finance &amp;<br />Accounting
        </h1>
      </div>
    </section>
  );
}
