export default function WhyWorkWithTalentFrontier() {
  const values = [
    'Requirement-Led',
    'Process-Focused',
    'Transparent',
    'Flexible',
    'Human-Led',
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-lg">
          
          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 tracking-tight">
            Why Work With Talent Frontier?
          </h3>

          {/* 5 Values Row with Dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 items-center">
            {values.map((title, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center px-3 sm:px-4 lg:border-r lg:border-white/15 last:lg:border-r-0 text-center"
              >
                <span className="text-white text-[13px] sm:text-[14px] font-medium leading-tight">
                  {title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
