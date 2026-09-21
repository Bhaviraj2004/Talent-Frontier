import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[737/488] max-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/Brand, Marketing & Creative Support/Hero Image.png"
          alt="Brand, Marketing & Creative Support"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071124]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-blue-400 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-1 sm:mb-2 md:mb-3 drop-shadow">
          TALENT FRONTIER
        </p>
        <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto drop-shadow-md">
          Marketing & Creative Professionals
        </h1>
      </div>
    </section>
  );
}
