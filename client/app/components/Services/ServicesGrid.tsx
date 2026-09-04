import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    id: 1,
    title: "1. Business Support Services",
    description: "Routine administrative and operational support that keeps your business running smoothly.",
    image: "/Services page/Rectangle 6.png",
    link: "#"
  },
  {
    id: 2,
    title: "2. People & Operations Support",
    description: "Support for people-related coordination, documentation and day-to-day operational activities.",
    image: "/Services page/Rectangle 7.png",
    link: "#"
  },
  {
    id: 3,
    title: "3. Finance & Accounting Support",
    description: "Structured assistance for routine finance, bookkeeping and accounting-related processes.",
    image: "/Services page/Rectangle 8.png",
    link: "#"
  },
  {
    id: 4,
    title: "4. Technology, IT & AI Support",
    description: "Technology support and practical AI-enabled solutions designed to improve business efficiency.",
    image: "/Services page/Rectangle 12.png",
    link: "#"
  },
  {
    id: 5,
    title: "5. Brand, Marketing & Creative Support",
    description: "Integrated support for brand communication, digital marketing and creative requirements.",
    image: "/Services page/Rectangle 13.png",
    link: "#"
  },
  {
    id: 6,
    title: "6. Process & Automation Support",
    description: "Workflow improvement and automation support that helps reduce repetitive manual activities.",
    image: "/Services page/Rectangle 14.png",
    link: "#"
  }
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-[#f8fafc] py-20 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[36px] font-bold text-[#1e293b] tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full border border-gray-100"
            >
              {/* Framed Image Container */}
              <div className="p-4 pb-0">
                <div className="relative w-full h-[220px] overflow-hidden rounded-2xl">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-[17px] font-bold text-[#1e293b] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow font-medium">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-[#2563eb] text-sm font-bold group/link mt-auto w-fit"
                >
                  Learn More 
                  <svg 
                    className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1.5 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
