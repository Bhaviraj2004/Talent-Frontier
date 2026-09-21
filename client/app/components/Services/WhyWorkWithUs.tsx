import Image from 'next/image';

const reasons = [
  { num: '01', title: 'Role Understanding', desc: 'We start by understanding what you actually need the person to do.' },
  { num: '02', title: 'Talent Identification', desc: 'We identify professionals whose experience aligns with the position.' },
  { num: '03', title: 'Screening', desc: 'Candidates are assessed against the requirements defined for the role.' },
  { num: '04', title: 'Business Alignment', desc: 'We consider communication, working arrangements and organisational requirements.' },
  { num: '05', title: 'Ongoing Partnership', desc: 'As your talent requirements evolve, Talent Frontier can support your future hiring needs.' }
];

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-white pt-4 pb-12 md:py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left: Image */}
        <div className="w-full lg:w-[45%] relative aspect-[672/276] sm:aspect-[16/9] lg:aspect-auto lg:h-[600px] rounded-2xl md:rounded-[32px] overflow-hidden bg-[#f8fafc] border border-slate-100 shadow-sm flex items-center justify-center group">
          <Image 
            src="/Services page/Rectangle 19.png" 
            alt="Why businesses work with us" 
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e293b] mb-4 md:mb-5 tracking-tight">
            Why Businesses Choose Talent Frontier
          </h2>
          
          <div className="mb-8 md:mb-10">
            <h3 className="text-lg md:text-[20px] font-bold text-[#2563eb] mb-2">Talent Aligned with Your Business</h3>
            <p className="text-slate-500 text-[15px] md:text-base leading-relaxed font-medium">
              Finding someone with the right technical skills is only part of building a successful team.<br className="hidden sm:block" />
              We focus on understanding the position, responsibilities, experience requirements and business environment before identifying suitable professionals.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 p-5 md:p-6 rounded-2xl bg-[#f8fafc] border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-lg transition-all duration-400 transform hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-[#2563eb] font-bold text-lg group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:border-[#2563eb] group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                  {reason.num}
                </div>
                
                {/* Text Content */}
                <div className="flex-1 sm:pt-1">
                  <h4 className="text-[#1e293b] font-bold text-lg md:text-[19px] mb-2 group-hover:text-[#2563eb] transition-colors duration-300 tracking-tight">
                    {reason.title}
                  </h4>
                  <p className="text-slate-500 text-[14px] md:text-[15px] leading-relaxed font-medium">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
