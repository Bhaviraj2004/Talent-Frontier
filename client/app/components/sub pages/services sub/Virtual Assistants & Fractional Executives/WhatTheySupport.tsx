export default function WhatTheySupport() {
  const capabilities = [
    { title: 'Executive Calendar & Schedule Coordination', category: 'Administrative & Executive' },
    { title: 'Strategic Business Planning & Roadmap Execution', category: 'Executive Leadership' },
    { title: 'Customer & Client Communication Management', category: 'Administrative Support' },
    { title: 'Operational Process Optimization & Workflow Setup', category: 'Operations & COO' },
    { title: 'Document Preparation, Reporting & Board Decks', category: 'Executive & Admin' },
    { title: 'Leadership Alignment & Cross-Team Coordination', category: 'Strategic Leadership' },
    { title: 'Database, CRM Updates & Data Integrity', category: 'Operations & Admin' },
    { title: 'Management Structures & KPI Tracking Systems', category: 'Executive Leadership' },
    { title: 'Meeting Coordination, Minutes & Action Tracking', category: 'Executive Assistant' },
    { title: 'Transformation, Change & Growth Initiatives', category: 'Strategic Advisory' },
    { title: 'General Back-Office Operations Assistance', category: 'Administrative Support' },
    { title: 'Executive-Level Decision Support & Mentorship', category: 'Fractional Advisory' },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] text-center mb-4 sm:mb-6">
          What These Professionals Can Support
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl mb-12 sm:mb-16">
          Tailored to your operational needs—from daily task execution to high-level strategic governance:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 w-full">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group flex items-start gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0047FF] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#0047FF] group-hover:text-white transition-colors mt-0.5">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0a192f] group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mt-1">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
