export default function BuiltAroundSystems() {
  const systems = [
    'Accounting Software',
    'Access Permissions',
    'Approval Authorities',
    'Security Requirements',
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Image Slot (Image will be added later) */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="w-full h-[280px] sm:h-[340px] md:h-[380px] rounded-[20px] md:rounded-[24px] bg-[#f1f5f9] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center hover:border-slate-400 transition-colors">
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

          {/* Right Side: Systems and Permissions List */}
          <div className="w-full lg:w-[52%] flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] leading-tight mb-2 tracking-tight">
              Built Around Your Systems
            </h2>
            
            <p className="text-[#64748b] text-[13px] sm:text-[14px] leading-relaxed mb-6">
              We work within approved systems, permissions and review procedures.
            </p>

            <div className="flex flex-col space-y-1 mb-6">
              {systems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-gray-200 py-3 text-[#0f172a] font-semibold text-[14px] sm:text-[15px]"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-[#2563eb] text-[12.5px] sm:text-[13px] font-medium">
              Final decisions and approvals remain with authorised personnel.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
