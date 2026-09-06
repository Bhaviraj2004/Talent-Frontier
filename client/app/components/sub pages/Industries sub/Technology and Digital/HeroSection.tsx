export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] lg:h-[600px] flex items-center justify-center bg-[#071124] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/sub pages/Industries/Technology and Digital/Rectangle 138.png" 
          alt="Technology and Digital" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071124]/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
          Technology &amp;<br />Digital
        </h1>
      </div>
    </section>
  );
}
