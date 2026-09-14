import React from 'react';

const suitableFor = [
  'Founders managing increasing responsibilities',
  'SMEs requiring senior-level business guidance',
  'Businesses preparing for growth',
  'Companies experiencing operational complexity',
  'Leadership teams requiring greater alignment',
  'Family businesses strengthening management processes',
  'Organisations undergoing change or improvement'
];

const Section6 = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-[#f2f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden group">
              <img 
                src="/sub pages/Services/Virtual CEO Services/Rectangle 150.png" 
                alt="Suitable for growing businesses" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-6">
            <div className="w-10 md:w-12 h-[2px] bg-[#1c55d4] mb-5 md:mb-6"></div>
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0f172a] mb-4 md:mb-5 tracking-tight leading-tight">Suitable For</h2>
            <p className="text-[#334155] mb-6 md:mb-8 text-[15px] sm:text-base md:text-[17px] font-medium">Our Virtual CEO Services are ideal for:</p>
            
            <ul className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-[18px]">
              {suitableFor.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-3.5 w-[18px] h-[18px] sm:w-5 sm:h-5 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] sm:text-[15px] text-[#475569] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
