import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/Business Support Services/ChatGPT Image Sep 2, 2026, 11_16_12 AM 1.png"
          alt="Business Support Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Business Support <br /> Services
        </h1>
      </div>
    </section>
  );
}
