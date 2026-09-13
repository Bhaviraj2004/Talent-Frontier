import Image from "next/image";
import Link from "next/link";

export default function BuildingConnections() {
  return (
    <section className="w-full max-w-7xl mx-auto pt-8 sm:pt-12 pb-6 sm:pb-10 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4 sm:mb-6 leading-tight">
          Building Better <br className="hidden md:block" />
          Connections Between <br className="hidden md:block" />
          Businesses and Talent.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
          We partner with Professional businesses to find, engage 
          and retain exceptional talent—so you can build high 
          performing teams and achieve lasting success.
        </p>
        <div>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-medium py-3 px-8 rounded-lg sm:rounded-sm transition-all duration-300 text-sm text-center shadow-md shadow-blue-500/20"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative aspect-[16/9] md:aspect-auto md:h-[440px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 border border-slate-100 group cursor-pointer transition-all duration-300">
        <Image
          src="/sub pages/About/Our Story/Rectangle.png"
          alt="Team collaboration"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
