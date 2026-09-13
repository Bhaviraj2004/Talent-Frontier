import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16">
      <div className="w-full lg:w-[60%] flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold mb-8 sm:mb-12 text-[#091535] text-center lg:text-left">
          How We Can Support You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <span className="text-[#1150fb] text-2xl font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">01</span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">Business Systems Support</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Keep your systems running smoothly.</p>
            </div>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <span className="text-[#1150fb] text-2xl font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">02</span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">User & Access Coordination</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Manage access and user changes simply.</p>
            </div>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <span className="text-[#1150fb] text-2xl font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">03</span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">Technology Setup</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Set up tools and systems the right way.</p>
            </div>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <span className="text-[#1150fb] text-2xl font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">04</span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">CRM Support</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Keep your CRM accurate and useful.</p>
            </div>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <span className="text-[#1150fb] text-2xl font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">05</span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">AI-Enabled Workflows</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Automate tasks and save time.</p>
            </div>
          </div>
          <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
            <div>
              <span className="text-[#1150fb] text-2xl font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">06</span>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">Digital Collaboration</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Enable effective teamwork across tools.</p>
            </div>
          </div>
          <div className="sm:col-span-2 md:col-span-3 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">07</span>
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-[15px] mb-1 leading-snug group-hover:text-blue-600 transition-colors">Technology Documentation</h3>
              <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">Clear guides and records your team can rely on.</p>
            </div>
          </div>
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
