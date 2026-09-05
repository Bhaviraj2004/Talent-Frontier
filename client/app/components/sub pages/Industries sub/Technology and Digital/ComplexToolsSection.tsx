export default function ComplexToolsSection() {
  const challenges = [
    { line1: 'Disconnected', line2: 'systems' },
    { line1: 'Shifting', line2: 'priorities' },
    { line1: 'Manual', line2: 'activity' },
    { line1: 'Limited', line2: 'visibility' },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[30px] p-8 sm:p-12 lg:p-14 shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Title */}
          <div className="w-full lg:w-[42%]">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-[1.2] tracking-tight">
              Complex tools<br />
              shouldn&apos;t create<br />
              complex work.
            </h3>
          </div>

          {/* Right 4 Challenges */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-start">
            {challenges.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug">
                  {item.line1}<br />{item.line2}
                </span>
                {/* Subtle underline bar matching screenshot */}
                <div className="w-8 h-[2px] bg-[#3b82f6] mt-2" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
