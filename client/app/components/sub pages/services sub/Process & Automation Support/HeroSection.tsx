import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] min-h-[220px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/Process & Automation Support/Editable Shape.png"
          alt="Process & Automation Support"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#091535]/60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight max-w-4xl mx-auto drop-shadow-md">
          Process & Automation<br />Support
        </h1>
      </div>
    </section>
  );
}
