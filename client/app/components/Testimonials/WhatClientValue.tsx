import Image from 'next/image';

const values = [
  { num: '01', title: 'Clear Communication', desc: 'Responsibilities, progress and next steps remain clearly communicated.' },
  { num: '02', title: 'Reliable Support', desc: 'Agreed activities are handled with consistency and attention to detail.' },
  { num: '03', title: 'Flexible Delivery', desc: 'Support can adapt as business priorities and workloads change.' },
  { num: '04', title: 'Practical Processes', desc: 'Structured workflows help improve organisation and accountability.' },
  { num: '05', title: 'Human Partnership', desc: 'Technology supports delivery, while people remain at the centre of the relationship.' }
];

export default function WhatClientValue() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 font-sans overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#041133]">
        <Image 
          src="/Testimonials page/Rectangle 46.png" 
          alt="Client Value Background" 
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
        />
        {/* Extra gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041133] via-[#041133]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-[24px] sm:text-[28px] md:text-[34px] font-bold text-white mb-6 sm:mb-8 md:mb-12 tracking-tight">
          What Client Value
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 lg:gap-6">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:bg-white/[0.09] hover:border-blue-400/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between last:col-span-2 md:last:col-span-1 lg:last:col-span-1"
            >
              <div>
                <span className="text-white text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-none mb-2 sm:mb-3 block">{val.num}</span>
                <div className="w-full h-px bg-white/20 mb-2.5 sm:mb-3.5"></div>
                <h4 className="text-white font-bold text-[13.5px] sm:text-[15px] mb-1.5 sm:mb-2 leading-snug">{val.title}</h4>
              </div>
              <p className="text-[#93c5fd] text-[11.5px] sm:text-[12.5px] leading-relaxed font-medium">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
