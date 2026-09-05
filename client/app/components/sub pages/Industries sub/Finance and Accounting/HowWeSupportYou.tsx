export default function HowWeSupportYou() {
  const leftColumn = [
    { num: '01', title: 'Bookkeeping Assistance', subtitle: 'Approved systems' },
    { num: '02', title: 'Accounts Payable', subtitle: 'Invoice organisation' },
    { num: '03', title: 'Accounts Receivable', subtitle: 'Payment records' },
  ];

  const rightColumn = [
    { num: '04', title: 'Reconciliation Support', subtitle: 'Prepared for review' },
    { num: '05', title: 'Expense Administration', subtitle: 'Expense documents' },
    { num: '06', title: 'Reporting Preparation', subtitle: 'Internal reporting' },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-[#0f172a] text-center mb-12 md:mb-16 tracking-tight">
          How We Can Support You
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Side: Image Slot (Image will be added later) */}
          <div className="w-full lg:w-[48%] flex items-center justify-center">
            <div className="w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-[20px] md:rounded-[24px] bg-[#f1f5f9] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center hover:border-slate-400 transition-colors">
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

          {/* Right Side: 6 Numbered Services in 2 Sub-columns */}
          <div className="w-full lg:w-[52%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* Sub-column 1: 01, 02, 03 */}
            <div className="flex flex-col space-y-6">
              {leftColumn.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-5">
                  <div className="flex items-start gap-4">
                    <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold tracking-tight min-w-[36px]">
                      {item.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[#0f172a] font-bold text-[14px] sm:text-[15px] leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sub-column 2: 04, 05, 06 */}
            <div className="flex flex-col space-y-6">
              {rightColumn.map((item, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-5">
                  <div className="flex items-start gap-4">
                    <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold tracking-tight min-w-[36px]">
                      {item.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[#0f172a] font-bold text-[14px] sm:text-[15px] leading-snug">
                        {item.title}
                      </span>
                      <span className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
