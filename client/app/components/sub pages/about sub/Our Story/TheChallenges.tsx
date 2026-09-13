export default function TheChallenges() {
  const challenges = [
    {
      title: "Disconnected Service Providers",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3 3L22 4"></path></svg>
      ),
    },
    {
      title: "Inefficient Business Processes",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 9l-6 6"></path></svg>
      ),
    },
    {
      title: "Time-Consuming Operations",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      ),
    },
    {
      title: "Lack of Clear Coordination",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      ),
    },
    {
      title: "Changing Business Needs",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-12">
          The Challenges We Saw
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="group cursor-pointer bg-white rounded-2xl shadow-sm border border-slate-200/80 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-blue-50/40 active:scale-[0.98] p-5 sm:p-7 flex flex-col items-center justify-center text-center h-full transition-all duration-300 last:col-span-2 md:last:col-span-1 lg:last:col-span-1"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {challenge.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#1a2332] group-hover:text-blue-600 transition-colors leading-snug">
                {challenge.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
