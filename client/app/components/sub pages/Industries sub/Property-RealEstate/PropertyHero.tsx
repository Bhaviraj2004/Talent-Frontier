import Image from 'next/image';

export default function PropertyHero() {
  return (
    <section className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-auto md:h-[500px] lg:h-[600px] min-h-[220px] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/sub pages/Industries/Property & Real Estate/Rectangle 138.png" 
          alt="Property Team" 
          fill 
          className="object-cover object-center" 
          priority 
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-md">
          Property & Real<br />Estate
        </h1>
      </div>
    </section>
  );
}
