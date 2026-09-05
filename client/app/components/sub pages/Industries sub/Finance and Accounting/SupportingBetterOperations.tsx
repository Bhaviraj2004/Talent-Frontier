export default function SupportingBetterOperations() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14">
          
          {/* Left Text Side */}
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] leading-[1.2] mb-5 tracking-tight">
              Supporting Better<br />Financial Operations
            </h2>
            <p className="text-[#475569] text-[15px] leading-relaxed max-w-[480px]">
              Clear records and defined workflows help finance teams operate with greater consistency.
            </p>
          </div>

          {/* Right Image Slot (Image will be added later) */}
          <div className="w-full md:w-[55%] flex items-center justify-center">
            <div className="w-full h-[260px] sm:h-[320px] md:h-[360px] rounded-[20px] md:rounded-[24px] bg-[#f1f5f9] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center hover:border-slate-400 transition-colors">
              <svg 
                className="w-12 h-12 text-slate-400 mb-3" 
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
              <span className="text-slate-600 text-sm font-medium">Image Card</span>
              <span className="text-slate-400 text-xs mt-1">Image will be added here</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
