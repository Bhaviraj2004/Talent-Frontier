export default function BuiltAroundCommerceSection() {
  const items = [
    { line1: 'E-Commerce', line2: 'Platforms' },
    { line1: 'Marketplace', line2: 'Portals' },
    { line1: 'Inventory', line2: 'Systems' },
    { line1: 'Customer', line2: 'Helpdesks' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between shadow-xl">
          
          {/* Left Side: Image Placeholder Slot (Image will be added later) */}
          <div className="w-full lg:w-[48%] min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] bg-[#122247]/60 flex items-center justify-center p-6 border-2 border-dashed border-white/20 hover:border-white/40 transition-colors">
            <div className="flex flex-col items-center justify-center text-center">
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

          {/* Right Side: Text & 4 Workflow Pillars */}
          <div className="w-full lg:w-[52%] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <div className="w-8 h-[3px] bg-[#2563eb] mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight mb-8 tracking-tight">
              Built Around Your<br />
              Commerce Systems
            </h2>

            {/* 4 Pillars in a row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug">
                    {item.line1}<br />{item.line2}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">
              Your team retains control over products, pricing, policies and customer decisions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
