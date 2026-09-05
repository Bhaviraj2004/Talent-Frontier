export default function HowWeSupport() {
  const steps = [
    { num: "01", label: "Understand" },
    { num: "02", label: "Plan" },
    { num: "03", label: "Set Up" },
    { num: "04", label: "Deliver" },
    { num: "05", label: "Review" },
    { num: "06", label: "Improve" },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-16">
        How We Support Better Outcomes
      </h2>

      <div className="relative max-w-5xl mx-auto mb-16 px-4">
        {/* Continuous Line (Desktop) */}
        <div className="hidden md:block absolute top-5 left-10 right-10 h-px bg-gray-300 z-0"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 relative z-10">
          {steps.map((step, index) => (
            <div key={step.num} className="flex flex-col items-center bg-white px-4 md:px-2">
              <span className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-2">{step.num}</span>
              <span className="text-sm font-bold text-[#1a2332]">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm font-bold text-[#1a2332]">
        A clear process keeps priorities, responsibilities and progress visible.
      </p>
    </section>
  );
}
