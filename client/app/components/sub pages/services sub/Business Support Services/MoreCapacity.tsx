import Image from 'next/image';

export default function MoreCapacity() {
  return (
    <section className="relative w-full py-20 md:py-32 flex items-center mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/Business Support Services/Group 5.png"
          alt="Business Capacity"
          fill
          className="object-cover object-right"
        />
        {/* Gradient Overlay: Solid dark blue on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 md:via-[#0a192f]/80 to-transparent"></div>
        {/* Additional solid overlay for mobile to ensure text readability */}
        <div className="absolute inset-0 bg-[#0a192f]/70 md:hidden"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 flex flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-lg">
            Who Is This For?
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-12 max-w-xl">
            This talent solution may suit businesses experiencing growing administrative workloads, expanding teams or a need for dedicated support without adding unnecessary pressure to existing employees.
          </p>

          <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/20 backdrop-blur-sm max-w-xl">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              Find the Administrative Professional Your Business Needs
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Tell us the position, responsibilities and experience you require.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors text-sm text-center"
            >
              Find Administrative Talent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
