import Image from 'next/image';

export default function PrioritiesSection() {
  const priorities = [
    "Responsibilities",
    "Systems",
    "Communication",
    "Review Process"
  ];

  return (
    <section className="w-full bg-white font-sans">
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative min-h-[260px] aspect-[620/420] lg:aspect-auto lg:min-h-0 group overflow-hidden">
          <Image
            src="/sub pages/Industries/SMEs & Growing Businesses/Priorities image placeholder.png"
            alt="Business Priorities"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Top Dark Blue */}
          <div className="bg-[#0b162c] px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center gap-8 text-white">
            <h2 className="text-3xl md:text-[34px] font-bold leading-tight flex-1">
              More growth.<br />More priorities.
            </h2>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {['Increasing Workload', 'Limited Capacity', 'Changing Processes', 'Disconnected Systems'].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-medium text-gray-200 hover:text-white transition-colors cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom White/Grey */}
          <div className="bg-white px-8 py-12 md:px-16 md:py-16 flex-1 flex flex-col justify-center border-b border-r border-gray-100">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-6">
              Built Around Your Priorities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 w-full max-w-lg">
              {priorities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-50/80 hover:bg-white p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white flex items-center justify-center transition-colors duration-300 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14px] sm:text-[15px] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[#64748b] text-[13px] font-medium">
              Your team retains control of decisions, approvals and business direction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
