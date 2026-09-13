import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full bg-[#f8f9fc] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-[55%] flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold mb-8 md:mb-10 text-[#091535] text-center md:text-left">
            How We Can Support You
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Cards */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">01</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Brand Communication</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Assistance with maintaining consistent messaging, visual standards and brand presentation.</p>
              </div>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">02</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Graphic Design</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Creative support for digital graphics, presentations, brochures, reports and approved marketing materials.</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">03</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Social Media Content</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Planning and creating approved posts, captions, campaign material and content schedules.</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">04</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Website Content Support</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Assistance with service-page content, insight formatting, landing pages and website updates.</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">05</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Email Marketing Support</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Support for approved email layouts, newsletters, campaign setup and audience organisation.</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">06</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Content Coordination</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Maintaining content calendars, approvals, assets and publication schedules.</p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-2xl flex gap-4 sm:gap-6 items-start shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <span className="text-[#1150fb] text-2xl font-black group-hover:scale-110 origin-left transition-transform duration-300 shrink-0">07</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-1.5 group-hover:text-blue-600 transition-colors">Campaign Support</h3>
                <p className="text-gray-600 text-xs sm:text-[14px] leading-relaxed pr-2">Assistance with campaign preparation, creative production, implementation and reporting organisation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[45%] mt-8 md:mt-16">
          <div className="relative w-full aspect-[627/604] md:aspect-auto md:h-full min-h-[260px] sm:min-h-[380px] md:min-h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Hero Image (1).png"
              alt="Support Image"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
