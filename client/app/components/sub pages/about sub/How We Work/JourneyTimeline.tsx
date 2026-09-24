export default function JourneyTimeline() {
  const phases = [
    {
      label: "BEFORE",
      title: "Understand → Define → Identify",
      description: "We learn about your organisation and establish what you need.",
      color: "bg-blue-600",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      steps: ["Understand", "Define", "Identify"],
    },
    {
      label: "DURING",
      title: "Assess → Connect → Decide",
      description: "We introduce relevant professionals and facilitate meaningful conversations.",
      color: "bg-[#0A1128]",
      lightBg: "bg-slate-50",
      borderColor: "border-slate-200",
      textColor: "text-[#0A1128]",
      steps: ["Assess", "Connect", "Decide"],
    },
    {
      label: "AFTER",
      title: "Transition → Support → Grow",
      description: "We help make the next step smooth and remain available as the relationship develops.",
      color: "bg-emerald-600",
      lightBg: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
      steps: ["Transition", "Support", "Grow"],
    },
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
            YOUR JOURNEY
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1a2332] mb-4 tracking-tight">
            From First Conversation to{" "}
            <br className="hidden sm:block" />
            Long-Term Connection
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-300 via-slate-300 to-emerald-300 z-0"></div>

          {phases.map((phase, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              {/* Phase Badge */}
              <div className={`${phase.color} text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full mb-6 shadow-lg`}>
                {phase.label}
              </div>

              {/* Card */}
              <div className={`w-full ${phase.lightBg} border ${phase.borderColor} rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}>
                {/* Steps flow */}
                <div className="flex items-center justify-center gap-1.5 mb-5 flex-wrap">
                  {phase.steps.map((step, si) => (
                    <span key={si} className="flex items-center gap-1.5">
                      <span className={`text-xs sm:text-sm font-bold ${phase.textColor}`}>{step}</span>
                      {si < phase.steps.length - 1 && (
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                      )}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
