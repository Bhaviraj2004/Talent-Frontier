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
    <section className="w-full bg-[#f4f7fb] py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0a192f] mb-10">
          How We Can Support You
        </h2>
        
        <div className="flex flex-col space-y-4">
          {supports.map((support, index) => (
            <div key={index} className="bg-white rounded-md p-6 flex flex-col md:flex-row items-start md:items-center shadow-sm">
              <span className="text-2xl font-bold text-[#0047FF] w-12 flex-shrink-0 mb-2 md:mb-0 mr-4">
                {support.id}
              </span>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-grow">
                <h3 className="text-sm font-bold text-[#0a192f] whitespace-nowrap">{support.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm">{support.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
