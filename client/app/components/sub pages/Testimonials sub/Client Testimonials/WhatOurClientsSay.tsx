import Image from "next/image";

export default function WhatOurClientsSay() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[500px] relative mt-10 px-4 md:px-0 max-w-7xl mx-auto">
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 bg-[#0A1128] text-white p-10 md:p-16 lg:p-24 flex flex-col justify-center rounded-l-md md:rounded-l-2xl z-10 relative">
        <div className="max-w-md">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-wider mb-6">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            What Our <br /> Clients Say
          </h2>
          <div className="w-12 h-0.5 bg-white mb-6"></div>
          <p className="text-gray-300 mb-10 text-sm md:text-base leading-relaxed">
            Genuine perspectives on working with Talent Frontier.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-8 rounded-sm transition duration-300">
            Explore Client Feedback
          </button>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
        {/* Blue border accent */}
        <div className="absolute -inset-1 bg-blue-500 rounded-2xl z-0 hidden md:block" style={{ top: '-4px', bottom: '-4px', right: '-4px', left: '-50px' }}></div>
        <div className="relative h-full w-full rounded-r-2xl md:rounded-none md:rounded-r-2xl md:rounded-bl-3xl md:rounded-tl-[4rem] overflow-hidden z-10">
           <Image
            src="/sub pages/Testimonials/Rectangle 97.png"
            alt="Colleagues discussing"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
