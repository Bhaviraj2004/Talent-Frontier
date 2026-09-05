import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
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
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight max-w-4xl mx-auto drop-shadow-md">
          Process & Automation<br />Support
        </h1>
      </div>
    </section>
  );
}
