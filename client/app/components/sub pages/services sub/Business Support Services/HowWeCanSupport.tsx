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
    <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] text-center mb-12 sm:mb-16">
          How We Can Support You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {supports.map((support, index) => (
            <div 
              key={index} 
              className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
            >
              <div className="w-full sm:w-2/5 aspect-[211/235] relative rounded-xl overflow-hidden shadow-sm bg-slate-100 flex-shrink-0">
                <Image
                  src={support.image}
                  alt={support.title}
                  fill
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full sm:w-3/5 flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-black text-[#0047FF] group-hover:scale-110 transition-transform origin-left mb-1.5 leading-none inline-block">
                  {support.id}
                </span>
                <h3 className="text-base font-bold text-[#0a192f] group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {support.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                  {support.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
