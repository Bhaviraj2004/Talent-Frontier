export default function CommonChallenges() {
  const challenges = [
    {
      title: 'Increasing Workload',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Bar chart with increasing zigzag arrow */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3v18h18" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 9l-5 5-4-4-3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 9h5v5" />
        </svg>
      ),
    },
    {
      title: 'Disconnected Information',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Disconnected / Unplugged icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.364 5.636l-3.536 3.536m0 0l-2.121-2.121m2.121 2.121l2.121 2.121M13.414 10.586L9.172 6.343a2 2 0 00-2.829 0l-.707.707a2 2 0 000 2.829l4.243 4.242m0 0l-5.657 5.657m5.657-5.657l2.121 2.121" />
        </svg>
      ),
    },
    {
      title: 'Delayed Follow-Ups',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Clock with arrow */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3a9 9 0 00-9 9" />
        </svg>
      ),
    },
    {
      title: 'Inconsistent Processes',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Inconsistent flow / broken steps icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h10m-10 6h14M8 6v12" />
        </svg>
      ),
    },
    {
      title: 'Limited Capacity',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Gauge / Speedometer maxed out */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 13l4-4" />
          <circle cx="12" cy="13" r="1.5" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 16a6 6 0 0112 0" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[30px] p-8 sm:p-10 lg:p-12 shadow-lg">
          
          {/* Section Heading */}
          <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-center text-white mb-10 tracking-tight">
            Common Business Challenges
          </h3>

          {/* 5 Column Grid with Dividers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 items-center">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-3 sm:px-4 lg:border-r lg:border-white/15 last:lg:border-r-0"
              >
                <div className="mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug max-w-[130px]">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
