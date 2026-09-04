import Image from 'next/image';

export default function ClientFeedback() {
  return (
    <section className="w-full bg-white pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#1e293b] mb-4 tracking-tight">
            Client Feedback
          </h2>
          <p className="text-[#475569] font-medium text-[15px]">
            Experience shared by businesses we're proud to support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8">
          
          {/* Large Left Card */}
          <div className="bg-[#0b1736] rounded-[32px] p-10 md:p-14 flex flex-col shadow-xl min-h-[500px]">
            <div className="mb-auto">
              <div className="text-white mb-8">
                <svg width="48" height="38" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <h3 className="text-[28px] md:text-[36px] text-white font-serif italic font-light leading-snug mb-16 max-w-sm">
                "[Genuine client feedback will appear here.]"
              </h3>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/20 pt-8">
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image src="/Testimonials page/Ellipse 18.png" alt="Client" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-[15px] mb-1">Client Name</h4>
                  <p className="text-gray-400 text-[13px] leading-tight">Position, Company Name<br/>Industry or Location</p>
                </div>
              </div>
              <span className="text-[#3b82f6] font-bold text-sm">
                Verified Client
              </span>
            </div>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="flex flex-col gap-6 md:gap-8">
            
            {/* Top Right Card */}
            <div className="bg-white border-2 border-blue-100 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden">
                <Image src="/Testimonials page/Ellipse 15.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-[#3b82f6] mb-5">
                  <svg width="28" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h3 className="text-[22px] md:text-[24px] text-[#1e293b] font-serif italic mb-10 leading-snug">
                  "[Genuine client feedback will appear here.]"
                </h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-auto">
                  <div>
                    <h4 className="text-[#1e293b] font-bold text-[15px] mb-1">Client Name</h4>
                    <p className="text-gray-500 text-[13px] leading-tight">Position, Company Name<br/>Industry or Location</p>
                  </div>
                  <span className="text-[#3b82f6] font-bold text-sm">
                    Verified Client
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="bg-white border-2 border-blue-100 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
              <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden">
                <Image src="/Testimonials page/Ellipse 16.png" alt="Client" fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="text-[#3b82f6] mb-5">
                  <svg width="28" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <h3 className="text-[22px] md:text-[24px] text-[#1e293b] font-serif italic mb-10 leading-snug">
                  "[Genuine client feedback will appear here.]"
                </h3>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-auto">
                  <div>
                    <h4 className="text-[#1e293b] font-bold text-[15px] mb-1">Client Name</h4>
                    <p className="text-gray-500 text-[13px] leading-tight">Position, Company Name<br/>Industry or Location</p>
                  </div>
                  <span className="text-[#3b82f6] font-bold text-sm">
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
