import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    id: 1,
    title: "01 — Accountants, Bookkeepers, Tax & Compliance",
    description: "Strengthen your finance and compliance operations with dedicated professionals across accounting, bookkeeping, tax preparation, audit readiness and statutory reporting.",
    positions: ["Accountants", "Bookkeepers", "Tax Specialists", "Audit Assistants", "BAS & GST Specialists", "Payroll Officers", "Compliance Officers", "Management Accountants"],
    image: "/Services page/Rectangle 8.png",
    link: "/our-services/accounting-tax-compliance",
    cta: "Explore Finance & Tax Talent"
  },
  {
    id: 2,
    title: "02 — HR & People Professionals",
    description: "Build a stronger people function with professionals experienced in recruitment, HR administration, employee coordination and talent management.",
    positions: ["HR Coordinators", "HR Administrators", "Recruiters", "Talent Acquisition Specialists", "People & Culture Coordinators", "HR Assistants"],
    image: "/Services page/Rectangle 7.png",
    link: "/our-services/hr-people-professionals",
    cta: "Explore HR Talent"
  },
  {
    id: 3,
    title: "03 — Virtual Assistants & Fractional Executives",
    description: "Build reliable administrative operations or access experienced executive leadership and strategic direction tailored to your business stage.",
    positions: ["Virtual Assistants", "Executive Assistants", "Virtual CEOs", "Fractional COOs", "Administrative Coordinators", "Operations Directors", "Executive Advisors"],
    image: "/Services page/Rectangle 6.png",
    link: "/our-services/virtual-assistants-fractional-executives",
    cta: "Explore Admin & Executive Talent"
  },
  {
    id: 4,
    title: "04 — IT, Software, AI & Automation Professionals",
    description: "Access specialized technical professionals who build robust software products, integrate cloud platforms, implement AI solutions and automate core business workflows.",
    positions: ["Software Developers", "Full-Stack Developers", "Automation Specialists", "CRM Specialists", "QA Engineers", "Data Specialists", "AI Engineers", "Systems Integration Specialists"],
    image: "/Services page/Rectangle 12.png",
    link: "/our-services/technology-automation-professionals",
    cta: "Explore Tech & Automation Talent"
  },
  {
    id: 5,
    title: "05 — Marketing & Creative Professionals",
    description: "Expand your marketing capability with professionals across digital marketing, content, social media, search and creative design.",
    positions: ["Digital Marketing Specialists", "Social Media Specialists", "SEO Specialists", "Content Writers", "Graphic Designers", "Performance Marketing Specialists", "Marketing Coordinators", "Video Editors"],
    image: "/Services page/Rectangle 13.png",
    link: "/our-services/marketing-creative-professionals",
    cta: "Explore Marketing Talent"
  }
];

export default function ServicesGrid() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 md:py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#1e293b] tracking-tight">
            Professionals We Can Help You Find
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
                <div className="relative w-full aspect-[426/220] overflow-hidden rounded-2xl">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-[17px] font-bold text-[#1e293b] mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-5 font-medium">
                  {service.description}
                </p>
                
                <div className="mb-6 flex-grow">
                  <p className="text-[13px] font-bold text-gray-900 mb-2 uppercase tracking-wide">Typical Positions:</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.positions.map((pos, i) => (
                      <li key={i} className="text-[12px] bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md font-medium border border-blue-100">
                        {pos}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Learn More Link */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-[#2563eb] text-sm font-bold group/link mt-auto w-fit"
                >
                  {service.cta}
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
