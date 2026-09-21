import React from 'react';

const Section2 = () => {
  return (
    <section className="w-full py-6 md:py-8 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/sub pages/Services/Virtual CEO Services/Editable Shape (1).png" 
                alt="Leadership Support" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 md:mb-6 leading-tight">
              When Fractional Leadership May Make Sense
            </h2>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6">
              A virtual or fractional executive model may be considered when your organisation needs senior expertise but the requirement does not necessarily justify a conventional full-time executive appointment.
            </p>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600">
              It can also provide additional leadership capacity during periods of growth, change or specific strategic initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
