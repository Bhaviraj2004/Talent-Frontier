import React from 'react';

const areas = [
  'Virtual CEOs',
  'Fractional CEOs',
  'Fractional COOs',
  'Operations Executives',
  'Business Strategy Professionals',
  'Executive Advisors',
  'Transformation Leaders',
  'Senior Business Operations Professionals'
];

const Section4 = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 text-white">
            <div className="w-10 md:w-12 h-[2px] bg-white mb-5 md:mb-6"></div>
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold mb-4 md:mb-5 tracking-tight leading-tight">Professionals We Can Help You Find</h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5 md:gap-y-7">
              {areas.map((area, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-[5px] h-[5px] rounded-full bg-white mr-3.5 flex-shrink-0"></span>
                  <span className="text-[14px] sm:text-[15px] text-slate-200 leading-snug">{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group">
              <img 
                src="/sub pages/Services/Virtual CEO Services/Rectangle 148.png" 
                alt="Areas of Focus" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
