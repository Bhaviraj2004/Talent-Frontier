import Image from "next/image";
import Link from "next/link";

export default function TechnologySupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 text-[#091535] leading-tight">
          Find the Technical Talent Behind Your Next Stage of Growth
        </h2>
        <p className="text-gray-800 mb-4 max-w-sm text-[15px] leading-relaxed">
          Technology requirements continue to evolve, but finding professionals with the right technical capabilities can be challenging.
        </p>
        <p className="text-gray-800 mb-10 max-w-sm text-[15px] leading-relaxed">
          Talent Frontier helps businesses identify technology professionals across software, IT, data, digital systems and AI.
        </p>
      </div>
      <div className="w-full md:w-[55%] relative aspect-[1441/595] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/ChatGPT Image Sep 2, 2026, 01_37_30 PM 1.png"
          alt="Technology Support"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
