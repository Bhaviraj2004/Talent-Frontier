import Image from 'next/image';

export default function SupportThatGrows() {
  const points = [
    { id: '01', text: 'Growing teams create more responsibilities' },
    { id: '02', text: 'Businesses formalising internal processes' },
    { id: '03', text: 'Organisations with recurring onboarding requirements' },
    { id: '04', text: 'Companies requiring operational coordination' },
    { id: '05', text: 'Managers handling increasing administrative workloads' },
    { id: '06', text: 'Distributed or hybrid teams' }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a192f] leading-tight mb-6 sm:mb-8">
            Support That Grows <br className="hidden sm:inline" /> With Your Team
          </h2>
          
          <div className="flex flex-col space-y-2.5 sm:space-y-3.5">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-2 sm:p-2.5 rounded-xl hover:bg-blue-50/50 transition-colors">
                <span className="text-[#0047FF] text-xs sm:text-sm font-bold shrink-0 w-6 pt-0.5">{point.id}</span>
                <span className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed flex-1">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative aspect-[600/250] md:aspect-auto md:h-[360px] lg:h-[400px] rounded-2xl md:rounded-[24px] overflow-hidden shadow-sm border border-slate-100">
          <Image
            src="/sub pages/Services/People & Operations Support/Team Collaboration Image.png"
            alt="Support That Grows"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
