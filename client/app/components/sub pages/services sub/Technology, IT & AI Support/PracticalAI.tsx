import Image from "next/image";

export default function PracticalAI() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-10 text-[#091535]">
          Practical AI Applications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">01</span>
            <span className="text-gray-900 text-[14px] font-bold group-hover:text-blue-600 transition-colors">Drafting</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">04</span>
            <span className="text-gray-900 text-[14px] font-bold group-hover:text-blue-600 transition-colors">Knowledge search</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">02</span>
            <span className="text-gray-900 text-[14px] font-bold group-hover:text-blue-600 transition-colors">Summarising</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">05</span>
            <span className="text-gray-900 text-[14px] font-bold group-hover:text-blue-600 transition-colors">Enquiry classification</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">03</span>
            <span className="text-gray-900 text-[14px] font-bold group-hover:text-blue-600 transition-colors">Data organisation</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 sm:p-3.5 flex items-center gap-3 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
            <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1150fb] font-black text-xs flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">06</span>
            <span className="text-gray-900 text-[14px] font-bold group-hover:text-blue-600 transition-colors">Reporting preparation</span>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-[13px] font-medium">
          Important work remains human reviewed.
        </p>
      </div>
      <div className="w-full md:w-[55%] relative aspect-[637/250] md:aspect-auto md:h-[320px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/AI Image.png"
          alt="Practical AI Applications"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
