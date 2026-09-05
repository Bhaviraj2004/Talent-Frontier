import Image from 'next/image';

export default function WhatYouCanExpect() {
  const points = [
    { id: '01', text: 'Organised Documentation' },
    { id: '02', text: 'Consistent Coordination' },
    { id: '03', text: 'Better Visibility' },
    { id: '04', text: 'Human-Led Support' }
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-sm">
            <Image
              src="/sub pages/Services/People & Operations Support/Team Support Image.png"
              alt="What You Can Expect"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm max-w-lg">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-8">
              What You Can Expect
            </h2>
            
            <div className="flex flex-col space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#0047FF] text-sm font-medium w-8">{point.id}</span>
                  <span className="text-[#0047FF] text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
