import Image from 'next/image';
import Link from 'next/link';

const industries = [
  { num: '01', title: 'Professional Services', desc: 'Structured administrative, operational, marketing and technology support for consultancies, agencies and other service-based organisations.', img: '/Industries page/Rectangle 24.png', dark: true, link: '/industries/professional-services' },
  { num: '02', title: 'Finance & Accounting', desc: 'Structured administrative, operational, marketing and technology support for consultancies, agencies and other service-based organisations.', img: '/Industries page/Rectangle 25.png', dark: false, link: '/industries/finance-and-accounting' },
  { num: '03', title: 'Technology & Digital', desc: 'Flexible operational, people, marketing and process support for technology companies and digital businesses.', img: '/Industries page/Rectangle 28.png', dark: true, link: '/industries/technology-and-digital' },
  { num: '04', title: 'Property & Real Estate', desc: 'Administrative, marketing and coordination support for property professionals and real estate businesses.', img: '/Industries page/Rectangle 29.png', dark: false, link: '/industries/property-and-real-estate' },
  { num: '05', title: 'E-commerce & Retail', desc: 'Practical support for product administration, customer coordination, marketing and everyday e-commerce operations.', img: '/Industries page/Rectangle 31.png', dark: false, link: '/industries/ecommerce-and-retail' },
  { num: '06', title: 'SMEs & Growing Businesses', desc: 'Flexible cross-functional support designed for small and medium-sized businesses managing growth and changing priorities.', img: '/Industries page/Rectangle 33.png', dark: true, link: '/contact' }
];

export default function IndustriesGrid() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-3">Industries</h4>
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#0f172a] tracking-tight">
            Industries We Support
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl sm:rounded-[24px] overflow-hidden flex flex-col sm:flex-row items-stretch h-full border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 hover:border-blue-500/50 active:brightness-105 active:scale-[0.99] transition-all duration-300 group ${ind.dark ? 'bg-[#0a1532] text-white hover:shadow-blue-950/40' : 'bg-[#eaf0f8] text-[#0f172a] hover:shadow-blue-500/10'}`}
            >
              {/* Text Side */}
              <div className="w-full sm:w-[55%] p-5 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-between">
                <div>
                  <span className={`font-bold text-[16px] sm:text-[18px] mb-2.5 sm:mb-3.5 block opacity-90 transition-colors ${ind.dark ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{ind.num}</span>
                  <h3 className={`text-[17px] sm:text-[20px] font-bold mb-3 sm:mb-5 tracking-tight leading-tight transition-colors ${ind.dark ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{ind.title}</h3>
                  <p className={`text-[12px] sm:text-[12.5px] leading-relaxed mb-6 font-medium sm:pr-2 ${ind.dark ? 'text-gray-300' : 'text-[#475569]'}`}>
                    {ind.desc}
                  </p>
                </div>
                <Link href={ind.link} className={`flex items-center gap-3 text-[13px] font-bold tracking-wide group/link mt-auto w-fit transition-colors ${ind.dark ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>
                  Explore 
                  <svg className={`w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300 ${ind.dark ? 'text-white group-hover/link:text-blue-400' : 'text-[#0f172a] group-hover/link:text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Image Side - full image is show on mobile without cropping */}
              <div className="w-full sm:w-[45%] relative aspect-[324/374] sm:aspect-auto sm:h-auto min-h-[220px] sm:min-h-[260px] self-stretch overflow-hidden bg-slate-900/10">
                <Image 
                  src={ind.img} 
                  alt={ind.title} 
                  fill 
                  className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 25vw"
                />
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
