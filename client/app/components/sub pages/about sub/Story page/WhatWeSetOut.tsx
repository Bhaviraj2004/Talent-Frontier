export default function WhatWeSetOut() {
  return (
    <section className="w-full bg-[#0A1128] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Rocket Icon Container */}
        <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
        </div>

        {/* Text Content */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Set Out to Build
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
            A client-focused business support partner that combines diverse professional expertise 
            with coordinated, practical solutions—helping businesses operate efficiently, overcome 
            challenges and grow with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
