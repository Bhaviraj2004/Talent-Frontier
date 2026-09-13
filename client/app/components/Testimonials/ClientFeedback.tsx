import Image from 'next/image';

export default function ClientFeedback() {
  return (
    <section id="client-feedback" className="w-full bg-white pb-16 sm:pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold text-[#1e293b] mb-3 sm:mb-4 tracking-tight">
            Client Feedback
          </h2>
          <p className="text-[#475569] font-medium text-[14px] sm:text-[15px]">
            Experience shared by businesses we're proud to support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8">
          
          {/* Large Left Card */}
          <div className="bg-[#0b1736] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-14 flex flex-col shadow-xl min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] border border-blue-900/40 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="mb-auto">
              <div className="text-white mb-4 sm:mb-8 group-hover:text-blue-400 transition-colors">
                <svg width="48" height="38" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h3 className="text-[24px] sm:text-[28px] md:text-[36px] text-white font-serif italic font-light leading-snug mb-8 sm:mb-16 max-w-sm">
                "[Genuine client feedback will appear here.]"
              </h3>
            </div>
            
            <div className="flex flex-row items-center justify-between gap-4 border-t border-white/20 pt-6 sm:pt-8 mt-auto">
              <div className="flex items-center gap-3 sm:gap-5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border-2 border-blue-400/30 group-hover:border-blue-400 transition-colors duration-300">
                  <Image src="/Testimonials page/Ellipse 18.png" alt="Client" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[14px] sm:text-[15px] mb-0.5 sm:mb-1 group-hover:text-blue-300 transition-colors">Client Name</h4>
                  <p className="text-gray-400 text-[12px] sm:text-[13px] leading-tight">Position, Company Name<br/>Industry or Location</p>
                </div>
              </div>
              <span className="text-[#3b82f6] group-hover:text-blue-300 font-bold text-xs sm:text-sm shrink-0 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 transition-colors">
                Verified Client
              </span>
            </div>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="flex flex-col gap-6 md:gap-8">
            
            {/* Top Right Card */}
            <div className="bg-white border-2 border-blue-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm flex flex-col sm:flex-row gap-6 md:gap-8 flex-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                <Image src="/Testimonials page/Ellipse 15.png" alt="Client" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-[#3b82f6] mb-3 sm:mb-5">
                  <svg width="28" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#1e293b] font-serif italic mb-6 sm:mb-10 leading-snug">
                  "[Genuine client feedback will appear here.]"
                </h3>
                <div className="flex flex-row items-center justify-between gap-4 mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-[#1e293b] font-bold text-[14px] sm:text-[15px] mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors">Client Name</h4>
                    <p className="text-gray-500 text-[12px] sm:text-[13px] leading-tight">Position, Company Name<br/>Industry or Location</p>
                  </div>
                  <span className="text-[#3b82f6] group-hover:text-blue-600 font-bold text-xs sm:text-sm shrink-0 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 transition-colors">
                    Verified Client
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-white border-2 border-blue-100 rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm flex flex-col sm:flex-row gap-6 md:gap-8 flex-1 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                <Image src="/Testimonials page/Ellipse 16.png" alt="Client" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-[#3b82f6] mb-3 sm:mb-5">
                  <svg width="28" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] text-[#1e293b] font-serif italic mb-6 sm:mb-10 leading-snug">
                  "[Genuine client feedback will appear here.]"
                </h3>
                <div className="flex flex-row items-center justify-between gap-4 mt-auto pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-[#1e293b] font-bold text-[14px] sm:text-[15px] mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors">Client Name</h4>
                    <p className="text-gray-500 text-[12px] sm:text-[13px] leading-tight">Position, Company Name<br/>Industry or Location</p>
                  </div>
                  <span className="text-[#3b82f6] group-hover:text-blue-600 font-bold text-xs sm:text-sm shrink-0 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 transition-colors">
                    Verified Client
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
