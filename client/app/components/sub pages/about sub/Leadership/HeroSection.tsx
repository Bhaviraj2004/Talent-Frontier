import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[1440/665] sm:aspect-auto sm:h-[340px] md:h-[460px] lg:h-[560px] flex items-center justify-center overflow-hidden bg-[#071328]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/About/Leadership/ChatGPT Image Sep 2, 2026, 09_39_11 AM 1.png"
          alt="Leadership Team"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Leadership
        </h1>
      </div>
    </section>
  );
}
