export default function CommonFinanceChallenges() {
  const challenges = [
    { line1: 'Increasing', line2: 'Transactions' },
    { line1: 'Disorganised', line2: 'Records' },
    { line1: 'Delayed', line2: 'Invoices' },
    { line1: 'Inconsistent', line2: 'Workflows' },
    { line1: 'Limited', line2: 'Visibility' },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[30px] p-8 sm:p-10 lg:p-12 shadow-lg">
          
          {/* Section Heading */}
          <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-center text-white mb-10 tracking-tight">
            Common Finance Challenges
          </h3>

          {/* 5 Column Grid with Dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 items-center">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-3 sm:px-4 lg:border-r lg:border-white/15 last:lg:border-r-0"
              >
                <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug">
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
