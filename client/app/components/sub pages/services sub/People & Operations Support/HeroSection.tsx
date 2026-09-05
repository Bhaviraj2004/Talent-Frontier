import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/People & Operations Support/ChatGPT Image Sep 2, 2026, 11_16_12 AM 2.png"
          alt="People & Operations Support"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          People & Operations <br /> Support
        </h1>
      </div>
    </section>
  );
}
