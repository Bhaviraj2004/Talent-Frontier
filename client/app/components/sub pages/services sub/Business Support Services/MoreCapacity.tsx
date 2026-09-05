import Image from 'next/image';

export default function MoreCapacity() {
  const points = [
    { id: '01', text: 'Growing businesses with increasing administrative workloads' },
    { id: '02', text: 'Teams requiring additional operational support and coordination' },
    { id: '03', text: 'Businesses seeking clearer finance and reporting processes' },
    { id: '04', text: 'Organisations upgrading their technology and digital systems' },
    { id: '05', text: 'Companies strengthening their marketing and brand presence' },
    { id: '06', text: 'Businesses looking to automate repetitive processes and workflows' }
  ];

  return (
    <section className="relative w-full py-20 md:py-32 flex items-center mb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sub pages/Services/Business Support Services/Group 5.png"
          alt="Business Capacity"
          fill
          className="object-cover object-right"
        />
        {/* Gradient Overlay: Solid dark blue on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/90 md:via-[#0a192f]/80 to-transparent"></div>
        {/* Additional solid overlay for mobile to ensure text readability */}
        <div className="absolute inset-0 bg-[#0a192f]/70 md:hidden"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10 max-w-md">
            Support for Business <br /> that Need More Capacity
          </h2>
          
          <div className="flex flex-col">
            {points.map((point, index) => (
              <div key={index} className="flex items-center py-3 border-b border-blue-900/50 hover:bg-white/5 transition-colors">
                <span className="text-[#0047FF] font-medium mr-4 w-6">{point.id}</span>
                <span className="text-gray-300 text-sm">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
