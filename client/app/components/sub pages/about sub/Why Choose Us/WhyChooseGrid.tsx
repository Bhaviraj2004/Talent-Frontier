import Image from 'next/image';

export default function WhyChooseGrid() {
  const reasons = [
    {
      id: '01',
      title: 'Client-First Approach',
      description: 'Your business needs guide every stage—from understanding your challenges and priorities to developing and delivering the right support solution.',
      image: '/sub pages/About/Why Choose Us/Rectangle 101.png'
    },
    {
      id: '02',
      title: 'Integrated Expertise',
      description: 'Access coordinated professional support across operations, finance, technology, marketing and business growth through one reliable service relationship.',
      image: '/sub pages/About/Why Choose Us/Rectangle 102.png'
    },
    {
      id: '03',
      title: 'Tailored Solutions',
      description: 'We assess your specific requirements and create practical solutions aligned with your operations, objectives and expected business outcomes.',
      image: '/sub pages/About/Why Choose Us/Rectangle 92.png'
    },
    {
      id: '04',
      title: 'Flexible, Scalable Support',
      description: 'Our support model adapts as your business evolves, helping you respond effectively to changing priorities, challenges and opportunities.',
      image: '/sub pages/About/Why Choose Us/Rectangle 94.png'
    },
    {
      id: '05',
      title: 'Transparent Communication',
      description: 'You receive clear updates, defined responsibilities and consistent communication throughout every stage of the engagement.',
      image: '/sub pages/About/Why Choose Us/Rectangle 97.png'
    },
    {
      id: '06',
      title: 'Dedicated Ongoing Support',
      description: 'A dedicated team stays connected with your business, monitors progress and continuously improves the support provided.',
      image: '/sub pages/About/Why Choose Us/Rectangle 98.png'
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a192f] text-center mb-12 max-w-xl leading-snug">
          Why Business Choose <br /> Talent Frontier
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div className="p-6 sm:p-8 sm:w-1/2 flex flex-col items-start justify-center">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0047FF] group-hover:scale-110 transition-transform duration-300 mb-3 origin-left inline-block">
                  {reason.id}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[#0a192f] group-hover:text-blue-600 transition-colors duration-300 mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
              <div className="w-full sm:w-1/2 relative aspect-[333/359] sm:aspect-auto min-h-[240px] sm:min-h-0 overflow-hidden bg-slate-50">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
