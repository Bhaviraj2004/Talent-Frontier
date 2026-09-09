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
    <section className="w-full bg-white py-10 sm:py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
        
        {/* Left: Image */}
        <div className="w-full lg:w-[48%] relative h-[240px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-sm shrink-0">
          <Image 
            src="/Services page/Rectangle 19.png" 
            alt="Why businesses work with us" 
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[52%] flex flex-col">
          <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold text-[#1e293b] mb-6 sm:mb-8 lg:mb-12 tracking-tight">
            Why Businesses Work With Us
          </h2>
          
          <div className="flex flex-col gap-5 sm:gap-7 lg:gap-9">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
                <div className="flex gap-4 sm:gap-6 min-w-[220px]">
                  <span className="text-[#2563eb] font-bold text-[17px]">{reason.num}</span>
                  <h4 className="text-[#1e293b] font-bold text-[17px]">{reason.title}</h4>
                </div>
                <p className="text-slate-500 text-[13.5px] leading-relaxed font-medium sm:flex-1 mt-0.5">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
