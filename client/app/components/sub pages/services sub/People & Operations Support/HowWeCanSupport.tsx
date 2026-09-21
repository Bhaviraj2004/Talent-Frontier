export default function HowWeCanSupport() {
  const supports = [
    'Recruitment coordination',
    'Candidate sourcing support',
    'Interview scheduling',
    'Employee onboarding administration',
    'HR documentation',
    'Employee records',
    'HR systems administration',
    'Internal communication coordination',
    'People operations',
    'General HR administration'
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-4 sm:mb-6 text-center">
          What These Professionals Can Support
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl mb-8 sm:mb-12">
          The actual responsibilities should always be determined by the position and the organisation's requirements.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {supports.map((support, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0047FF] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-sm font-bold text-[#0a192f] group-hover:text-blue-600 transition-colors leading-snug">
                {support}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
