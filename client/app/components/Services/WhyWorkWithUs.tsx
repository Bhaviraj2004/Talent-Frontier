import Image from 'next/image';

const reasons = [
  { num: '01', title: 'Requirement-Led', desc: 'Support is structured around your actual business needs.' },
  { num: '02', title: 'Flexible', desc: 'Services can adapt as your priorities and workload change.' },
  { num: '03', title: 'Transparent', desc: 'Clear communication, responsibilities and progress updates.' },
  { num: '04', title: 'Process-Focused', desc: 'Documented workflows help maintain consistency and accountability.' },
  { num: '05', title: 'Human-Led', desc: 'Technology supports delivery, while people manage the relationship.' }
];

export default function WhyWorkWithUs() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Image */}
        <div className="w-full lg:w-[45%] relative h-[350px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden bg-[#f8fafc] border border-slate-100 shadow-sm flex items-center justify-center group">
          <Image 
            src="/Services page/Rectangle 19.png" 
            alt="Why businesses work with us" 
            fill
            className="object-contain p-4 sm:p-8 group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e293b] mb-10 lg:mb-14 tracking-tight">
            Why Businesses Work With Us
          </h2>
          
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
