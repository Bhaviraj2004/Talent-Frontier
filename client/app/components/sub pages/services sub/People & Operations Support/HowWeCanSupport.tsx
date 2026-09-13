export default function HowWeCanSupport() {
  const supports = [
    {
      id: '01',
      title: 'Role Scoping & Planning',
      description: 'Support for defining roles and planning your team requirements.'
    },
    {
      id: '02',
      title: 'Sourcing Coordination',
      description: 'Structured coordination of sourcing activities based on your requirements.'
    },
    {
      id: '03',
      title: 'Screening & Interview Coordination',
      description: 'Support with screening and coordinating the interview process.'
    },
    {
      id: '04',
      title: 'Onboarding Process Support',
      description: 'Helping organise a structured onboarding experience for new team members.'
    },
    {
      id: '05',
      title: 'Team Administration Support',
      description: 'Practical administrative support for day-to-day team operations.'
    },
    {
      id: '06',
      title: 'People & Operations Support',
      description: 'Coordinated support across your people and operational requirements.'
    },
    {
      id: '07',
      title: 'Flexible Business Support',
      description: 'Support that can adapt as your team\'s needs and business priorities change.'
    }
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] mb-8 sm:mb-12 text-center md:text-left">
          How We Can Support You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {supports.map((support, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0047FF] font-black text-xl flex items-center justify-center group-hover:bg-[#0047FF] group-hover:text-white transition-all duration-300 mb-4">
                  {support.id}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {support.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {support.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
