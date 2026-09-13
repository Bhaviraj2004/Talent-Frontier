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

          {/* 5 Column Grid with Balanced Responsive Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3.5 sm:gap-4 items-stretch">
            {challenges.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 hover:border-blue-400/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${
                  idx === 4 
                    ? 'col-span-2 sm:col-span-3 lg:col-span-1' 
                    : 'col-span-1 sm:col-span-2 lg:col-span-1'
                }`}
              >
                <div className="mb-3 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug">
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
