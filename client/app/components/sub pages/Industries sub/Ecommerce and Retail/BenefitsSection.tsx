export default function BenefitsSection() {
  const benefits = [
    { title: 'The Benefits for Your Business', isHeader: true },
    { title: 'Accurate Listings', isHeader: false },
    { title: 'Prompt Customer Care', isHeader: false },
    { title: 'Organised Inventory', isHeader: false },
    { title: 'Scalable Operations', isHeader: false },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Grid with Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-b border-gray-100 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className={`p-6 sm:p-8 flex items-center ${
                benefit.isHeader ? 'bg-gray-50/50' : 'bg-white'
              }`}
            >
              <span 
                className={`text-[15px] sm:text-[16px] leading-snug ${
                  benefit.isHeader 
                    ? 'font-bold text-[#0f172a]' 
                    : 'font-semibold text-[#1e293b]'
                }`}
              >
                {benefit.title}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer / Control Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-[12px] sm:text-[13px]">
            Support is delivered within approved systems, access controls and review processes.
          </p>
        </div>

      </div>
    </section>
  );
}
