export default function OurApproach() {
  const steps = [
    { title: "Understand", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" },
    { title: "Source", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" },
    { title: "Screen", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { title: "Shortlist", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Connect", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { title: "Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
  ];

  return (
    <section className="bg-[#f8fafc] py-24 px-6 w-full font-sans mt-20">
      <div className="max-w-[1400px] mx-auto text-center">
        <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-4">Our Approach</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-20 tracking-tight">A Clear and Structured Recruitment Process</h2>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-6xl mx-auto">
          {/* Horizontal connecting line */}
          <div className="absolute top-10 left-12 right-12 h-[2px] bg-gray-200 hidden md:block z-0"></div>
          
          {steps.map((step, idx) => (
             <div key={idx} className="flex flex-col items-center w-full md:w-auto mb-12 md:mb-0 relative z-10 bg-[#f8fafc]">
               <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center text-[#2563eb] mb-5 outline outline-[8px] outline-[#f8fafc] border border-gray-100">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={step.icon}></path></svg>
               </div>
               <span className="font-bold text-[#0f172a] text-sm tracking-wide">{step.title}</span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
