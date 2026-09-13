export default function MissionVisionValues() {
  const pillars = [
    {
      title: "Our Mission",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
      ),
      desc: "To connect businesses with the right talent through personalised service, market expertise and a commitment to outcomes.",
    },
    {
      title: "Our Vision",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
      ),
      desc: "To be Australia's most trusted recruitment partner—known for building better connections and stronger futures.",
    },
    {
      title: "Our Values",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
      ),
      desc: "Principles that guide how we work, who we partner with and the impact we aim to make.",
    },
  ];

  const valuesList = [
    { name: "Integrity", icon: <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> },
    { name: "Quality", icon: <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg> },
    { name: "Transparency", icon: <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> },
    { name: "Responsiveness", icon: <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> },
    { name: "Partnership", icon: <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-10 sm:py-14 px-4 md:px-8">
      {/* 3 Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
        {pillars.map((pillar, index) => (
          <div 
            key={index} 
            className="bg-[#f8fafc] border border-slate-200/80 hover:border-blue-400 hover:bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 flex flex-col group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm mb-5">
              {pillar.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a2332] group-hover:text-blue-600 transition-colors mb-3">
              {pillar.title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 5 Value Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {valuesList.map((val, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl shadow-sm border border-slate-200/80 hover:border-blue-400 hover:shadow-lg hover:bg-blue-50/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 p-4 flex items-center justify-center gap-2 group cursor-pointer last:col-span-2 md:last:col-span-1 lg:last:col-span-1"
          >
            <div className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 text-blue-600">
              {val.icon}
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#1a2332] group-hover:text-blue-600 transition-colors">
              {val.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
