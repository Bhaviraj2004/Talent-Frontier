import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] min-h-[220px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Testimonials/Client Testimonials/Hero Photo.png"
          alt="Office Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#354964]/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-blue-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3">
          TESTIMONIALS TALENT FRONTIER
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Client <br />
          Testimonials
        </h1>
      </div>
    </section>
  );
}
