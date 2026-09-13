export default function OurPrinciples() {
  const principles = [
    { num: "01", title: "Understand", desc: "Your business needs guide the way we work, ensuring every solution is purposeful and aligned." },
    { num: "02", title: "Plan", desc: "Support can adapt as your priorities and workload change, providing flexible operational momentum." },
    { num: "03", title: "Set Up", desc: "Responsibilities, communication and progress remain completely clear, transparent and accountable." },
    { num: "04", title: "Deliver", desc: "Structured workflows support consistency, excellence and dependable everyday performance." },
    { num: "05", title: "Review", desc: "Technology supports delivery, while experienced professionals manage the relationship and quality." }
  ];

  return (
    <section className="px-4 sm:px-6 max-w-[1400px] mx-auto w-full font-sans mb-12 sm:mb-20">
      <div className="bg-[#f4f8fb] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 shadow-sm border border-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] text-center mb-3">
          Our Principles
        </h2>
        <p className="text-gray-600 text-sm text-center mb-8 sm:mb-12 max-w-lg mx-auto">
          The core commitments that define our client partnerships and service standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {principles.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 active:scale-95 transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden last:sm:col-span-2 last:lg:col-span-1"
            >
              <div>
                {/* Number Badge */}
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm mb-4 border border-blue-100/80 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  {p.num}
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2.5 group-hover:text-blue-600 transition-colors duration-200">
                  {p.title}
                </h4>

                {/* Description (Justified) */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed text-justify font-normal">
                  {p.desc}
                </p>
              </div>

              {/* Bottom animated hover accent bar */}
              <div className="h-1 w-full bg-blue-600 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

