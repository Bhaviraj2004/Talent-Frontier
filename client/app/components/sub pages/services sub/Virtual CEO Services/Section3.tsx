import React from 'react';

const features = [
  {
    title: 'Business Strategy',
    description: 'Clarify business objectives, priorities and practical action plans.'
  },
  {
    title: 'Operational Direction',
    description: 'Review workflows, responsibilities and operational challenges.'
  },
  {
    title: 'Performance Visibility',
    description: 'Establish suitable reporting, review processes and accountability.'
  },
  {
    title: 'Leadership Support',
    description: 'Provide an experienced perspective for important business discussions.'
  },
  {
    title: 'Team Alignment',
    description: 'Help connect business priorities with responsibilities and team activity.'
  },
  {
    title: 'Growth Planning',
    description: 'Support capacity planning, improvement initiatives and changing business requirements.'
  }
];

const Section3 = () => {
  return (
    <section className="w-full pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[26px] md:text-3xl lg:text-4xl font-bold text-center text-[#1c55d4] mb-8 md:mb-12">
          How a Virtual CEO Can Support You
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl sm:rounded-3xl border border-[#b5ccf5] p-4 sm:p-6 md:p-8 lg:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col justify-center min-h-[160px] sm:min-h-[220px] md:min-h-[260px] hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <h3 className="text-[14px] sm:text-lg md:text-[19px] font-bold text-[#0f172a] mb-1.5 sm:mb-2 md:mb-3 leading-tight sm:leading-normal">{feature.title}</h3>
              <p className="text-[12px] sm:text-[14px] md:text-[15px] text-gray-700 leading-snug sm:leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
