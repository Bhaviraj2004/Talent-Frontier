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
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] leading-tight mb-8">
            Support That Grows <br /> With Your Team
          </h2>
          
          <div className="flex flex-col space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center">
                <span className="text-[#0047FF] text-sm font-medium w-6">{point.id}</span>
                <span className="text-[#0047FF] text-sm">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-sm">
            <Image
              src="/sub pages/Services/People & Operations Support/Team Collaboration Image.png"
              alt="Support That Grows"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
