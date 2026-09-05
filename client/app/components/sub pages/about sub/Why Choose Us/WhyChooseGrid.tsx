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
            <div key={index} className="bg-white flex flex-col sm:flex-row h-full">
              <div className="p-8 sm:w-1/2 flex flex-col items-start justify-center">
                <span className="text-3xl md:text-4xl font-bold text-[#0047FF] mb-3">{reason.id}</span>
                <h3 className="text-lg md:text-xl font-bold text-[#0a192f] mb-4 leading-tight">{reason.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{reason.description}</p>
              </div>
              <div className="sm:w-1/2 relative min-h-[250px] sm:min-h-0">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
