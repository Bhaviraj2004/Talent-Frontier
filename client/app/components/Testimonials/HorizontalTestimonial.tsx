import Image from 'next/image';

export default function HorizontalTestimonial() {
  return (
    <section className="w-full bg-white pb-16 sm:pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="bg-[#f2f6fc] rounded-2xl sm:rounded-[32px] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 sm:gap-10 lg:gap-16 shadow-sm border border-slate-200/60 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
          
          {/* Profile Image */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden shadow-md mx-auto md:mx-0 border-4 border-white group-hover:border-blue-200 transition-colors duration-300">
            <Image 
              src="/Testimonials page/Screenshot 2026-09-04 064851.png" 
              alt="Client Feedback" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* Feedback Content */}
          <div className="flex flex-col flex-1 w-full">
            <div className="text-[#3b82f6] mb-4 sm:mb-6 hidden md:block group-hover:text-blue-600 transition-colors">
              <svg width="40" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <h3 className="text-[20px] sm:text-[22px] md:text-[26px] text-[#1e293b] font-serif italic mb-6 sm:mb-8 md:mb-10 leading-snug text-center md:text-left">
              "[Genuine client feedback will appear here.]"
            </h3>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 md:gap-4 text-[13px] sm:text-[14px]">
              <span className="text-[#1e293b] font-bold group-hover:text-blue-600 transition-colors">Client Name</span>
              <span className="text-slate-300">•</span>
              <span className="text-gray-500 font-medium">Position, Company Name</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="text-gray-500 font-medium hidden sm:inline">Industry or Location</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#3b82f6] group-hover:text-blue-700 font-bold px-2.5 py-0.5 rounded-full bg-blue-100/60 text-xs sm:text-sm transition-colors">Verified Client</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
