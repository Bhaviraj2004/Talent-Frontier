export default function MorePropertiesBanner() {
  const challenges = [
    { line1: 'Scattered', line2: 'Information' },
    { line1: 'Delayed', line2: 'Follow-Ups' },
    { line1: 'Repetitive', line2: 'Administration' },
    { line1: 'Limited', line2: 'Visibility' },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#dce6f5] rounded-[16px] md:rounded-[24px] p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Title */}
          <div className="w-full lg:w-[45%]">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0f172a] leading-[1.2] tracking-tight">
              More properties.<br />
              More moving parts.
            </h3>
          </div>

          {/* Right 4 Challenges */}
          <div className="w-full lg:w-[55%] grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {challenges.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <span className="text-[#0f172a] text-[13px] sm:text-[14px] font-semibold leading-snug">
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
