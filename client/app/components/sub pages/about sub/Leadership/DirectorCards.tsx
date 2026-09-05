import Image from 'next/image';
import Link from 'next/link';

export default function DirectorCards() {
  const directors = [
    {
      name: 'Director Name',
      title: 'Co-Founder & Director',
      image: '/sub pages/About/Leadership/Rectangle 19.png',
      description: 'Director Name partners closely with clients to understand their business, people and goals. With a commercial approach, they lead client relationships and search strategy to connect organisations with exceptional talent that drives long-term impact.',
      areas: ['Business Strategy', 'Recruitment', 'Operations', 'Client Relationships'],
      linkedin: '#'
    },
    {
      name: 'Director Name',
      title: 'Co-Founder & Director',
      image: '/sub pages/About/Leadership/Rectangle 20.png',
      description: 'Director Name partners closely with clients to understand their business, people and goals. With a commercial approach, they lead client relationships and search strategy to connect organisations with exceptional talent that drives long-term impact.',
      areas: ['Business Strategy', 'Recruitment', 'Operations', 'Client Relationships'],
      linkedin: '#'
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] pb-24 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-8 md:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {directors.map((director, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6 md:gap-8">
              <div className="w-full sm:w-2/5 flex-shrink-0 relative h-[320px] sm:h-auto sm:min-h-[400px]">
                <Image
                  src={director.image}
                  alt={director.name}
                  fill
                  className="object-cover rounded-[24px]"
                />
              </div>
              <div className="w-full sm:w-3/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#0a192f] mb-1">{director.name}</h3>
                <p className="text-[#0047FF] font-medium text-sm mb-4">{director.title}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {director.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#0a192f] mb-3">Areas of Experience</h4>
                  <div className="flex flex-wrap gap-2">
                    {director.areas.map((area, i) => (
                      <span key={i} className="text-xs text-gray-600 border border-gray-300 rounded-md px-3 py-1">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href={director.linkedin} className="text-[#0047FF] font-medium text-sm flex items-center gap-2 hover:underline">
                  LinkedIn 
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 8H12.6666" stroke="#0047FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="#0047FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
