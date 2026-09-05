export default function WhatWeSetOut() {
  return (
    <section className="w-full bg-[#0A1128] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Rocket Icon Container */}
        <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
          {/* A better rocket icon for this placeholder: */}
          <svg className="w-10 h-10 md:w-12 md:h-12 text-white absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
           {/* Let's use a simpler rocket SVG */}
           <div className="bg-[#0A1128] w-full h-full absolute flex items-center justify-center rounded-full">
               <div className="bg-blue-600 w-full h-full rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
               </div>
           </div>
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
