import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    id: 1,
    title: "01 — Virtual Assistants & Administrative Professionals",
    description: "Build reliable administrative support around your business with professionals who can assist with day-to-day coordination, communication and operational tasks.",
    positions: ["Virtual Assistants", "Executive Assistants", "Administrative Assistants", "Data Entry Specialists", "Customer Support Professionals", "Office Support Professionals"],
    image: "/Services page/Rectangle 6.png",
    link: "/our-services/virtual-assistants-administration",
    cta: "Explore Administrative Talent"
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
    title: "03 — Accountants & Bookkeepers",
    description: "Strengthen your finance function with professionals who can support accounting, bookkeeping, payroll, accounts and financial operations.",
    positions: ["Accountants", "Bookkeepers", "Assistant Accountants", "Accounts Payable Officers", "Accounts Receivable Officers", "Payroll Officers", "Finance Assistants", "Management Accountants"],
    image: "/Services page/Rectangle 8.png",
    link: "/our-services/accountants-bookkeepers",
    cta: "Explore Finance Talent"
  },
  {
    id: 4,
    title: "04 — IT, Software & AI Professionals",
    description: "Access technical professionals who can support software development, IT operations, digital platforms, data and emerging AI requirements.",
    positions: ["Software Developers", "Web Developers", "Full-Stack Developers", "IT Support Specialists", "QA Professionals", "Data Professionals", "AI & Automation Specialists", "Technical Support Professionals"],
    image: "/Services page/Rectangle 12.png",
    link: "/our-services/technology-professionals",
    cta: "Explore Technology Talent"
  },
  {
    id: 5,
    title: "05 — Marketing & Creative Professionals",
    description: "Expand your marketing capability with professionals across digital marketing, content, social media, search and creative design.",
    positions: ["Digital Marketing Specialists", "Social Media Specialists", "SEO Specialists", "Content Writers", "Graphic Designers", "Performance Marketing Specialists", "Marketing Coordinators", "Video Editors"],
    image: "/Services page/Rectangle 13.png",
    link: "/our-services/marketing-creative-professionals",
    cta: "Explore Marketing Talent"
  },
  {
    id: 6,
    title: "06 — Automation & Systems Professionals",
    description: "Find professionals who can help improve workflows, connect business systems and reduce repetitive manual processes.",
    positions: ["Automation Specialists", "CRM Specialists", "Business Systems Specialists", "Workflow Automation Professionals", "Integration Specialists", "No-Code/Low-Code Developers", "Process Improvement Professionals"],
    image: "/Services page/Rectangle 14.png",
    link: "/our-services/automation-systems-professionals",
    cta: "Explore Automation Talent"
  },
  {
    id: 7,
    title: "07 — Virtual & Fractional Executives",
    description: "Access experienced professionals who can provide leadership, strategic direction and operational oversight based on your business requirements.",
    positions: ["Virtual CEOs", "Fractional CEOs", "Fractional COOs", "Operations Leaders", "Business Strategy Professionals", "Executive Advisors"],
    image: "/Services page/Rectangle 6.png",
    link: "/our-services/virtual-fractional-executives",
    cta: "Explore Executive Talent"
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
