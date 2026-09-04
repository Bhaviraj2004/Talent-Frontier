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
    <section className="relative w-full py-24 md:py-28 font-sans overflow-hidden">
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-[32px] md:text-[36px] font-bold text-white mb-16 tracking-tight">
          What Client Value
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-white text-[32px] md:text-[38px] font-medium leading-none mb-6">{val.num}</span>
              <div className="w-full h-[1px] bg-white/20 mb-6"></div>
              <h4 className="text-white font-bold text-[15px] mb-3">{val.title}</h4>
              <p className="text-[#93c5fd] text-[13px] leading-relaxed font-medium pr-4">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
