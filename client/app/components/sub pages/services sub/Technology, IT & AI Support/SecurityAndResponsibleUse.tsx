import Image from "next/image";

export default function SecurityAndResponsibleUse() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
      <div className="w-full md:w-[35%] relative aspect-[300/185] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Security Image.png"
          alt="Security and Responsible Use"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-[65%]">
        <span className="text-[#0047FF] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 block">
          Trust & Compliance
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold mb-6 sm:mb-8 text-[#091535]">
          Security and Responsible Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1150fb] font-black text-xs sm:text-sm flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">01</span>
            <span className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">Access control</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1150fb] font-black text-xs sm:text-sm flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">02</span>
            <span className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">Information security</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1150fb] font-black text-xs sm:text-sm flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">03</span>
            <span className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">Privacy obligations</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1150fb] font-black text-xs sm:text-sm flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">04</span>
            <span className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">Data retention</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1150fb] font-black text-xs sm:text-sm flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">05</span>
            <span className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">Approval processes</span>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-lg hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-center gap-3.5">
            <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#1150fb] font-black text-xs sm:text-sm flex items-center justify-center group-hover:bg-[#1150fb] group-hover:text-white transition-colors duration-200 shrink-0">06</span>
            <span className="text-gray-900 text-sm font-bold group-hover:text-blue-600 transition-colors">Acceptable use</span>
          </div>
        </div>
      </div>
    </section>
  );
}
