import React from 'react';
import Link from 'next/link';

const Section1 = () => {
  return (
    <section className="w-full pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-24 lg:pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 md:mb-6 leading-tight">
              Strategic Leadership<br className="hidden md:block" />Without a Full-Time<br className="hidden md:block" />Executive
            </h2>
            <p className="text-[15px] sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-lg">
              Senior-level business guidance designed to help founders and leadership teams establish priorities, strengthen operations and move forward with greater clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm md:text-base font-medium rounded bg-[#1c55d4] text-white hover:bg-blue-700 transition-colors">
                Discuss Your Business Priorities
              </Link>
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-[#1c55d4] text-sm md:text-base font-medium rounded text-[#1c55d4] bg-white hover:bg-blue-50 transition-colors">
                Book a Consultation
              </Link>
            </div>
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
