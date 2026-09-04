export default function ShortlistProcess() {
  const steps = [
    { title: "Requirement Analysis", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { title: "Sourcing", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Screening", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { title: "Shortlisting", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" },
    { title: "Client Review", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { title: "Interview", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
  ];

  return (
    <section className="bg-[#f2f7fc] py-16 px-6 w-full font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
        <div className="lg:col-span-1">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4 tracking-tight leading-tight">Every Shortlist Starts With Understanding Your Requirement.</h2>
          <p className="text-gray-500 text-sm md:text-base">Our quality-focused approach ensures you receive the right candidates who match your role and your culture.</p>
        </div>
        <div className="lg:col-span-3 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center w-full sm:w-auto flex-1">
              <div className="flex flex-col items-center text-center w-full">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#2563eb] mb-4 shadow-sm border border-gray-100">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.icon}></path>
                  </svg>
                </div>
                <span className="text-[11px] font-bold text-gray-700 leading-tight uppercase tracking-wide">{step.title}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="mx-2 lg:mx-4 text-gray-300 hidden sm:block">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
