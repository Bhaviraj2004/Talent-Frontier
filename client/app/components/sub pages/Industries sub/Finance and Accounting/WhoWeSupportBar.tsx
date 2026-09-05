export default function WhoWeSupportBar() {
  const groups = [
    { line1: 'Accounting', line2: 'Practices' },
    { line1: 'Bookkeeping', line2: 'Businesses' },
    { line1: 'Financial Service', line2: 'Providers' },
    { line1: 'Internal Finance', line2: 'Teams' },
    { line1: 'Professional', line2: 'Firms' },
    { line1: 'Growing', line2: 'Businesses' },
  ];

  return (
    <section className="w-full bg-[#f0f4fa] py-8 border-y border-blue-50">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Title */}
          <div className="flex-shrink-0">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight text-center lg:text-left">
              Who We Support
            </h3>
          </div>

          {/* Right 6 Groups */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
            {groups.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#0f172a] leading-tight">
                  {item.line1}<br />{item.line2}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
