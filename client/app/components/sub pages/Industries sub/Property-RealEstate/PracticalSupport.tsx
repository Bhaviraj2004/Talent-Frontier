import Image from 'next/image';

export default function PracticalSupport() {
  return (
    <section className="w-full py-24 font-sans bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 relative flex flex-col md:flex-row items-center">
        
        {/* Dark Navy Card (Left, Overlapping) */}
        <div className="md:absolute left-6 lg:left-12 z-10 w-full md:w-[500px] lg:w-[600px] bg-[#08154a] rounded-3xl p-10 md:p-14 shadow-xl">
          <p className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-6">
            PROPERTY & REAL ESTATE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Practical Support for<br />Property and Real<br />Estate Businesses
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-10">
            Structured support for administration, property coordination, marketing and everyday operations.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1c55d4] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-xs transition-colors">
              Discuss Your Property Needs
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-semibold text-xs transition-colors">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[70%] lg:w-[65%] ml-auto mt-10 md:mt-0 relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-sm">
          <Image 
            src="/sub pages/Industries/Property & Real Estate/Image placeholder – Aerial commercial property.png" 
            alt="Modern Office" 
            fill 
            className="object-cover" 
          />
        </div>
        
      </div>
    </section>
  );
}
