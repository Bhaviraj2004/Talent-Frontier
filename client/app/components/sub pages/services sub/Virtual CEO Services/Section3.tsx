import React from 'react';

const features = [
  "Business strategy",
  "Operational planning",
  "Growth initiatives",
  "Leadership coordination",
  "Business performance",
  "Process improvement",
  "Strategic projects",
  "Management structures",
  "Organisational priorities",
  "Executive-level decision support"
];

const Section3 = () => {
  return (
    <section className="w-full pt-6 pb-12 md:pt-8 md:pb-16 lg:pt-10 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[26px] md:text-3xl lg:text-4xl font-bold text-center text-[#1c55d4] mb-8 md:mb-12">
          Areas They May Support
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1c55d4] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#1c55d4] group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors leading-snug">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
