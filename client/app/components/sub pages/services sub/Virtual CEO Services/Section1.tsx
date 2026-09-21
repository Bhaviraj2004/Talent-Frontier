import React from 'react';
import Link from 'next/link';

const Section1 = () => {
  return (
    <section className="w-full pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-24 lg:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 md:mb-6 leading-tight">
              Experienced Leadership Without a Traditional Full-Time Executive Model
            </h2>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600 mb-4 max-w-lg">
              Not every organisation requires—or is ready for—another permanent senior executive.
            </p>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600 mb-4 max-w-lg">
              Some businesses need experienced leadership for a particular growth stage, transformation, operational challenge or strategic requirement.
            </p>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg">
              Talent Frontier helps businesses explore experienced professionals who can provide leadership on virtual or fractional arrangements.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src="/sub pages/Services/Virtual CEO Services/Editable Shape.png" 
                alt="Strategic Leadership" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
