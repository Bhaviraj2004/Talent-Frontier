import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] min-h-[220px] flex items-center justify-center overflow-hidden bg-slate-950">
      <Image
        src="/sub pages/Industries/SMEs & Growing Businesses/Hero photo placeholder.png"
        alt="SMEs & Growing Businesses Hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
          SMEs & Growing<br />Businesses
        </h1>
      </div>
    </section>
  );
}
