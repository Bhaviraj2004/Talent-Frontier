import Image from 'next/image';

export default function HorizontalTestimonial() {
  return (
    <section className="w-full bg-white pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-[#f2f6fc] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-10 lg:gap-16 shadow-sm">
          
          {/* Profile Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden shadow-md mx-auto md:mx-0">
            <Image 
              src="/Testimonials page/Screenshot 2026-09-04 064851.png" 
              alt="Client Feedback" 
              fill
              className="object-cover"
            />
          </div>

          {/* Feedback Content */}
          <div className="flex flex-col flex-1 w-full">
            <div className="text-[#3b82f6] mb-6 hidden md:block">
              <svg width="40" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <h3 className="text-[22px] md:text-[26px] text-[#1e293b] font-serif italic mb-8 md:mb-12 leading-snug text-center md:text-left">
              "[Genuine client feedback will appear here.]"
            </h3>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 text-[13.5px]">
              <span className="text-[#1e293b] font-bold">Client Name</span>
              <span className="text-gray-300 hidden sm:inline-block">|</span>
              <span className="text-gray-500 font-medium">Position, Company Name</span>
              <span className="text-gray-300 hidden sm:inline-block">|</span>
              <span className="text-gray-500 font-medium hidden md:inline-block">Industry or Location</span>
              <span className="text-gray-300 hidden md:inline-block">|</span>
              <span className="text-[#3b82f6] font-bold">Verified Client</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
