import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16">
      <div className="w-full lg:w-[60%] flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold mb-8 sm:mb-12 text-[#091535] text-center lg:text-left">
          Areas They Can Support
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            "Website and application development",
            "Software development",
            "Platform maintenance",
            "Technical troubleshooting",
            "Quality assurance and testing",
            "IT support",
            "Data management and analysis",
            "System implementation",
            "AI-enabled workflows",
            "Technical documentation"
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/80 rounded-xl p-3 sm:p-4 hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1150fb] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#1150fb] group-hover:text-white transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] leading-snug group-hover:text-blue-600 transition-colors">{item}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[40%] relative aspect-[472/453] lg:aspect-auto min-h-[260px] lg:min-h-[480px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Support Image.png"
          alt="Support Image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
