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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {items.map((item, idx) => (
            <div key={idx} className="text-center flex items-center justify-center py-2">
              <span className="text-[#0f172a] text-[13px] sm:text-[14px] font-semibold leading-snug tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
