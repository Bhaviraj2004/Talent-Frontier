import Image from 'next/image';

const industries = [
  { num: '01', title: 'Professional Services', desc: 'Structured administrative, operational, marketing and technology support for consultancies, agencies and other service-based organisations.', img: '/Industries page/Rectangle 24.png', dark: true },
  { num: '02', title: 'Finance & Accounting', desc: 'Structured administrative, operational, marketing and technology support for consultancies, agencies and other service-based organisations.', img: '/Industries page/Rectangle 25.png', dark: false },
  { num: '03', title: 'Technology & Digital', desc: 'Flexible operational, people, marketing and process support for technology companies and digital businesses.', img: '/Industries page/Rectangle 28.png', dark: true },
  { num: '04', title: 'Property & Real Estate', desc: 'Administrative, marketing and coordination support for property professionals and real estate businesses.', img: '/Industries page/Rectangle 29.png', dark: false },
  { num: '05', title: 'E-commerce & Retail', desc: 'Practical support for product administration, customer coordination, marketing and everyday e-commerce operations.', img: '/Industries page/Rectangle 31.png', dark: false },
  { num: '06', title: 'SMEs & Growing Businesses', desc: 'Flexible cross-functional support designed for small and medium-sized businesses managing growth and changing priorities.', img: '/Industries page/Rectangle 33.png', dark: true }
];

export default function IndustriesGrid() {
  return (
    <section className="w-full bg-[#f8fafc] py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-3">Industries</h4>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#0f172a] tracking-tight">
            Industries We Support
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className={`rounded-[24px] overflow-hidden flex flex-col sm:flex-row h-full border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 ${ind.dark ? 'bg-[#0a1532] text-white' : 'bg-[#eaf0f8] text-[#0f172a]'}`}>
              
              {/* Text Side */}
              <div className="w-full sm:w-[55%] p-8 lg:p-10 flex flex-col justify-center">
                <span className="font-bold text-[18px] mb-4 opacity-90">{ind.num}</span>
                <h3 className="text-[20px] font-bold mb-6 tracking-tight leading-tight">{ind.title}</h3>
                <p className={`text-[12.5px] leading-relaxed mb-10 font-medium pr-4 ${ind.dark ? 'text-gray-300' : 'text-[#475569]'}`}>
                  {ind.desc}
                </p>
                <button className="flex items-center gap-3 text-[13px] font-bold tracking-wide group mt-auto w-fit">
                  Explore 
                  <svg className={`w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300 ${ind.dark ? 'text-white' : 'text-[#0f172a]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Image Side */}
              <div className="w-full sm:w-[45%] relative h-[250px] sm:h-auto min-h-[300px]">
                <Image src={ind.img} alt={ind.title} fill className="object-cover" />
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
