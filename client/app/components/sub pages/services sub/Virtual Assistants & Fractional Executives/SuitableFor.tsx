import Image from 'next/image';

const targetAudiences = [
  'Founders and executives managing expanding operational responsibilities',
  'SMEs requiring senior-level business guidance without full-time C-suite overhead',
  'Growing businesses experiencing administrative bottlenecks or scheduling backlogs',
  'Leadership teams requiring greater operational alignment and execution discipline',
  'Companies scaling customer communication, data workflows, or back-office tasks',
  'Organisations undergoing strategic change, rapid growth, or restructuring'
];

export default function SuitableFor() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group">
              <img 
                src="/sub pages/Services/Virtual CEO Services/Rectangle 150.png" 
                alt="Suitable for scaling businesses" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:pl-6">
            <div className="w-10 md:w-12 h-[2px] bg-[#0047FF] mb-5 md:mb-6"></div>
            <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0a192f] mb-4 md:mb-5 tracking-tight leading-tight">
              Who Is This For?
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-[15px] sm:text-base leading-relaxed">
              Our combined executive and administrative talent solutions are tailored for:
            </p>
            
            <ul className="flex flex-col gap-y-3.5 sm:gap-y-4">
              {targetAudiences.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3.5 w-5 h-5 rounded-full bg-blue-50 text-[#0047FF] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#0047FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] sm:text-[15px] text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
