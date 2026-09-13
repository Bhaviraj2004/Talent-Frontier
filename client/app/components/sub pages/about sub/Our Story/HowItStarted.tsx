import Image from "next/image";

export default function HowItStarted() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 sm:py-12 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
      {/* Left Image Area */}
      <div className="w-full md:w-1/2 relative aspect-[16/9] md:aspect-auto md:h-[420px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 border border-slate-100 group cursor-pointer transition-all duration-300">
        <Image
          src="/sub pages/About/Our Story/Rectangle (1).png"
          alt="Founders discussing"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Right Content Area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6">
          How It Started
        </h2>
        <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-6 max-w-lg">
          <p>
            Our founders saw firsthand how difficult it was for growing businesses to manage 
            multiple service providers across operations, finance, technology and marketing. 
            Disconnected support often led to delays, unclear communication and 
            inconsistent results.
          </p>
          <p>
            Talent Frontier was created to provide businesses with one reliable, coordinated 
            support partner—focused on understanding their challenges, delivering practical 
            solutions and supporting sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
