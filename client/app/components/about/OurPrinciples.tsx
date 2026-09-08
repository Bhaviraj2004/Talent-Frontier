export default function OurPrinciples() {
  const principles = [
    { num: "01", title: "Understand", desc: "Your business needs guide the way we work." },
    { num: "02", title: "Plan", desc: "Support can adapt as your priorities and workload change." },
    { num: "03", title: "Set Up", desc: "Responsibilities, communication and progress remain clear." },
    { num: "04", title: "Deliver", desc: "Structured workflows support consistency and accountability." },
    { num: "05", title: "Review", desc: "Technology supports delivery, while people manage the relationship." }
  ];

  return (
    <section className="px-4 sm:px-6 max-w-[1400px] mx-auto w-full font-sans mb-12 sm:mb-20">
      <div className="bg-[#f4f8fb] rounded-xl p-6 sm:p-10 md:p-16 lg:p-20 shadow-sm border border-gray-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] text-center mb-8 sm:mb-16">
          Our Principles
        </h2>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row justify-between items-start max-w-6xl mx-auto gap-6 sm:gap-8 md:gap-4">
          
          {principles.map((p, idx) => (
            <div key={idx} className="flex-1 relative flex flex-col items-center text-center px-2 last:col-span-2 sm:last:col-span-1 md:last:col-span-1">
              <div className="flex items-center w-full justify-center mb-3 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-[#0f172a]">{p.num}</span>
                {idx < principles.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-[60%] w-[80%] h-px bg-gray-300 z-0"></div>
                )}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#0f172a] mb-2 sm:mb-3">{p.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[160px] sm:max-w-[150px] mx-auto">
                {p.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
