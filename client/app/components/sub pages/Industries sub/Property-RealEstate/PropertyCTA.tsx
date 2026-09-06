import Image from 'next/image';

export default function PropertyCTA() {
  return (
    <section className="relative w-full py-24 flex items-center font-sans mt-10">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/sub pages/Industries/Property & Real Estate/Image placeholder – Contemporary residential property at sunset.png" 
          alt="Contemporary residential property at sunset" 
          fill 
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* CTA Box */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="w-full max-w-xl bg-[#08154a] p-10 md:p-14 rounded-3xl shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
            Strengthen the Support<br />Behind Your Property Business
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-10">
            Tell us about your workload, systems and operational priorities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1c55d4] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-xs transition-colors">
              Discuss Your Property Needs
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-semibold text-xs transition-colors">
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
