import Image from 'next/image';

export default function HowWeCanSupport() {
  const supports = [
    {
      id: '01',
      title: 'Administrative Support',
      description: 'Assistance with routine documentation, data organisation, records and general administrative activities.',
      image: '/sub pages/Services/Business Support Services/Rectangle 106.png'
    },
    {
      id: '02',
      title: 'Calendar and Meeting Coordination',
      description: 'Assistance with routine documentation, data organisation, records and general administrative activities.',
      image: '/sub pages/Services/Business Support Services/Rectangle 108.png'
    },
    {
      id: '03',
      title: 'Document Preparation',
      description: 'Formatting and organising reports, presentations, templates and other approved business documents.',
      image: '/sub pages/Services/Business Support Services/Rectangle 110.png'
    },
    {
      id: '04',
      title: 'Data Entry and Record Management',
      description: 'Maintaining accurate information within approved spreadsheets, databases and business systems.',
      image: '/sub pages/Services/Business Support Services/Rectangle 112.png'
    },
    {
      id: '05',
      title: 'Inbox and Communication Support',
      description: 'Assistance with organising routine business communication according to your approved processes.',
      image: '/sub pages/Services/Business Support Services/Rectangle 113.png'
    },
    {
      id: '06',
      title: 'Research and Information Organisation',
      description: 'Collecting and organising relevant business information to support internal planning and decision-making.',
      image: '/sub pages/Services/Business Support Services/Rectangle 114.png'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] text-center mb-16">
          How We Can Support You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full">
          {supports.map((support, index) => (
            <div key={index} className="flex flex-row items-start gap-4">
              <div className="w-2/5 flex-shrink-0 relative aspect-square">
                <Image
                  src={support.image}
                  alt={support.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="w-3/5 flex flex-col">
                <span className="text-3xl font-bold text-[#0047FF] mb-1 leading-none">{support.id}</span>
                <h3 className="text-sm font-bold text-[#0a192f] mb-2 leading-tight">{support.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed">{support.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
