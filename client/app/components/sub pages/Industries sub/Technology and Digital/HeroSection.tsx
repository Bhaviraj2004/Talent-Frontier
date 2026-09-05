export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[600px] flex items-center justify-center bg-[#071124] overflow-hidden">
      {/* Background Image / Placeholder Container - Image will be added later */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#071124]/90 via-[#0a1835]/80 to-[#071124] flex items-center justify-center">
          <div 
            className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
          />
        </div>
      </div>

      {/* Hero Title */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.1]">
          Technology &amp;<br />Digital
        </h1>
      </div>
    </section>
  );
}
