import Image from "next/image";

export default function BuildingConnections() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
          Building Better <br className="hidden md:block" />
          Connections Between <br className="hidden md:block" />
          Businesses and Talent.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
          We partner with Professional businesses to find, engage 
          and retain exceptional talent—so you can build high 
          performing teams and achieve lasting success.
        </p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300 text-sm">
            Talk to Our Team
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden">
        <Image
          src="/sub pages/About/Story page/Rectangle.png"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
