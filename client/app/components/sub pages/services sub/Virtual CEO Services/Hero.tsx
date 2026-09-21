import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full aspect-[1435/672] flex items-center justify-center overflow-hidden bg-[#071124] group">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/sub pages/Services/Virtual CEO Services/ChatGPT Image Sep 2, 2026, 03_28_10 PM 2.png"
          alt="Virtual CEO Services"
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#071124]/40 md:bg-[#071124]/55 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20 md:bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-2 sm:px-4 max-w-4xl mx-auto">
        <p className="text-blue-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3 drop-shadow">
          TALENT FRONTIER
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-md">
          Virtual & Fractional Executives
        </h1>
      </div>
    </section>
  );
};

export default Hero;
