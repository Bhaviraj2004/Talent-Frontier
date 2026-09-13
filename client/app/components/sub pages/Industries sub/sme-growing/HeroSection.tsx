import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[743/458] max-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
      <Image
        src="/sub pages/Industries/SMEs & Growing Businesses/Hero photo placeholder.png"
        alt="SMEs & Growing Businesses Hero"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#071124]/55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-4">
        <p className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-1 sm:mb-2 md:mb-3 drop-shadow">
          INDUSTRIES TALENT FRONTIER
        </p>
        <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-md">
          SMEs & Growing<br />Businesses
        </h1>
      </div>
    </section>
  );
}
