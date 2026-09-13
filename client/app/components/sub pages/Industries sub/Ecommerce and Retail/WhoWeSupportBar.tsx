export default function WhoWeSupportBar() {
  const items = [
    'Online Retailers',
    'Consumer Brands',
    'Marketplaces',
    'Subscription Businesses',
    'Multi-Channel Retail',
    'Growing Stores',
  ];

  return (
    <section className="w-full bg-white border-y border-gray-200/70 py-6 md:py-8">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/80 hover:bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center flex items-center justify-center"
            >
              <span className="text-[#0f172a] group-hover:text-blue-600 text-[13px] sm:text-[14px] font-semibold leading-snug tracking-tight transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
