import Link from 'next/link';

export default function StrengthenCommerceCTA() {
  return (
    <section className="w-full bg-white pt-8 pb-16 md:pb-24">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between shadow-xl">
          
          {/* Left Dark Navy Box */}
          <div className="w-full lg:w-[50%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-[1.15] mb-4 tracking-tight">
              Strengthen Your<br />
              Commerce Operations
            </h2>
            
            <p className="text-gray-300 text-[14px] sm:text-[15px] mb-8 font-normal leading-relaxed">
              Tell us about your catalogue, channels and operational priorities.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Discuss Your Business Needs
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#1d4ed8] hover:bg-gray-100 px-6 py-3.5 rounded-md font-semibold text-[13px] sm:text-[14px] transition-colors shadow-md text-center"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          {/* Right Image Slot (Image will be added later) */}
          <div className="w-full lg:w-[50%] min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-[#122247]/50 border-2 border-dashed border-white/20 flex flex-col items-center justify-center p-6 text-center hover:border-white/40 transition-colors">
            <svg 
              className="w-12 h-12 text-blue-400/60 mb-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span className="text-gray-300 text-sm font-medium">Image Card</span>
            <span className="text-gray-400 text-xs mt-1">Image will be added here</span>
          </div>

        </div>
      </div>
    </section>
  );
}
