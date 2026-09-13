import Image from 'next/image';

export default function WhatYouCanExpect() {
  const points = [
    { id: '01', text: 'Organised Documentation' },
    { id: '02', text: 'Consistent Coordination' },
    { id: '03', text: 'Better Visibility' },
    { id: '04', text: 'Human-Led Support' }
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 relative aspect-[500/280] md:aspect-auto md:h-[380px] rounded-2xl md:rounded-[24px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
          <Image
            src="/sub pages/Services/People & Operations Support/Team Support Image.png"
            alt="What You Can Expect"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 max-w-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a192f] mb-6 sm:mb-8">
              What You Can Expect
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {points.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5 hover:shadow-md hover:border-blue-500 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group/card cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100/80 text-[#0047FF] font-black text-xs flex items-center justify-center group-hover/card:bg-[#0047FF] group-hover/card:text-white transition-all duration-200 shrink-0">
                    {point.id}
                  </span>
                  <span className="text-slate-800 font-bold text-xs sm:text-sm group-hover/card:text-blue-600 transition-colors">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
