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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight mb-6">
            Strengthen Your People Operations
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mb-8">
            Whether you require additional recruitment capacity or ongoing HR administration support, we can help you search for suitable professionals.
          </p>

          <div>
            <a 
              href="/contact"
              className="inline-block bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors text-sm text-center shadow-sm"
            >
              Find HR & People Talent
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative aspect-[600/250] rounded-2xl md:rounded-[24px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
          <Image
            src="/sub pages/Services/People & Operations Support/Team Collaboration Image.png"
            alt="Support That Grows"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
