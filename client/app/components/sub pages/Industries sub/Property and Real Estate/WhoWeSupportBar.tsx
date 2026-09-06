export default function WhoWeSupportBar() {
  const groups = [
    { line1: 'Real Estate', line2: 'Agencies' },
    { line1: 'Property', line2: 'Managers' },
    { line1: 'Developers', line2: '' },
    { line1: 'Commercial', line2: 'Property' },
    { line1: 'Property', line2: 'Consultants' },
    { line1: 'Growing', line2: 'Property Teams' },
  ];

  return (
    <section className="w-full bg-white py-6 border-y border-gray-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Left Title */}
          <div className="flex-shrink-0">
            <span className="text-[#2563eb] text-[12px] font-bold uppercase tracking-wider leading-tight block text-center lg:text-left">
              WHO WE<br />SUPPORT
            </span>
          </div>

          {/* Right 6 Groups */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-4 items-center">
            {groups.map((item, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center px-3 lg:border-r lg:border-gray-200 last:lg:border-r-0"
              >
                <span className="text-[13px] sm:text-[14px] font-bold text-[#0f172a] leading-tight">
                  {item.line1}
                  {item.line2 && <><br />{item.line2}</>}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
