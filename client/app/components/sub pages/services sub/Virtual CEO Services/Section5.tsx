import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business, objectives, challenges and current operating model.'
  },
  {
    number: '02',
    title: 'Assess',
    description: 'We review priorities, workflows, responsibilities and available business information.'
  },
  {
    number: '03',
    title: 'Plan',
    description: 'A practical roadmap is developed with clear priorities, actions and ownership.'
  },
  {
    number: '04',
    title: 'Support',
    description: 'We work alongside your leadership team through agreed meetings and activities.'
  },
  {
    number: '05',
    title: 'Review',
    description: 'Progress, challenges and changing requirements are reviewed regularly.'
  },
  {
    number: '06',
    title: 'Improve',
    description: 'The plan and support structure evolve as your business develops.'
  }
];

const Section5 = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-10 md:w-12 h-1 bg-[#1c55d4] mb-5 md:mb-6 mx-auto lg:mx-0"></div>
        <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 lg:mb-16 text-center lg:text-left">
          How We Work
        </h2>
        
        <div className="relative overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory">
          <div className="flex lg:grid lg:grid-cols-6 gap-6 lg:gap-4 relative z-10 w-max lg:w-full min-w-full pt-2">
            {/* Connector Line */}
            <div className="absolute top-9 md:top-10 left-0 w-full h-[2px] bg-blue-100 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group w-[260px] sm:w-[280px] lg:w-auto shrink-0 snap-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1c55d4] text-white flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 shadow-md border-4 border-white relative z-10 transition-transform group-hover:scale-105">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0f172a] mb-2 md:mb-3">{step.title}</h3>
                <p className="text-[14px] md:text-sm text-gray-600 px-4 lg:px-0">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
