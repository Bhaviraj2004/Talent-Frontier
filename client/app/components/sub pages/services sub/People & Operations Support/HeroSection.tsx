import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[1440/674] max-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/People & Operations Support/ChatGPT Image Sep 2, 2026, 11_16_12 AM 2.png"
          alt="People & Operations Support"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071124]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
          People & Operations <br /> Support
        </h1>
      </div>
    </section>
  );
}
