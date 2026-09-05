import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/About/Our Approach/ChatGPT Image Sep 2, 2026, 10_02_51 AM 1.png"
          alt="Our Approach Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A1128]/70 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          Our Approach
        </h1>
      </div>
    </section>
  );
}
