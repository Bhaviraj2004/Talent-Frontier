import Image from 'next/image';
import Link from 'next/link';

const steps = [
  { num: '01', title: 'Challenge', text: '[Client Challenge and context will appear here.]' },
  { num: '02', title: 'Support', text: '[Our Approach and Solutions And Support Provided will appear here.]' },
  { num: '03', title: 'Outcome', text: '[results and outcomes achieved will appear here.]' },
];

export default function ClientSuccessStory() {
  return (
    <section id="success-stories" className="w-full bg-white py-16 sm:py-24 md:py-32 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch">
        
        {/* Left Column - Intro */}
        <div className="w-full lg:w-[25%] flex flex-col justify-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1e293b] mb-4 sm:mb-6 leading-[1.2] tracking-tight">
            From Business Challenges to Better Outcomes
          </h2>
          <p className="text-[#64748b] text-[14px] leading-relaxed font-medium">
            Explore detailed client stories to understand how our support approach can be applied to real business requirements.
          </p>
        </div>

        {/* Middle Column - Featured Card */}
        <div className="w-full md:w-[70%] lg:w-[40%] bg-[#08153b] rounded-3xl overflow-hidden shadow-xl border border-blue-900/40 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-950/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer">
          <div className="relative w-full aspect-[574/284] overflow-hidden">
            <Image 
              src="/Testimonials page/Rectangle 46.png" 
              alt="Success Story" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow justify-between bg-gradient-to-b from-[#08153b] to-[#040b21]">
            <div>
              <p className="text-[#60a5fa] text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-4 sm:mb-5 flex items-center">
                Professional Services <span className="mx-2 text-white/30">|</span> Client Success Story
              </p>
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-white mb-6 sm:mb-8 leading-snug tracking-tight group-hover:text-blue-200 transition-colors">
                Supporting a Growing Business Through Structured Support
              </h3>
            </div>
            <Link 
              href="/contact"
              className="self-start bg-transparent border border-white/20 hover:bg-white hover:text-[#08153b] hover:border-white text-white px-6 py-3 rounded-md text-[13px] font-semibold transition-all duration-300 mt-4 text-center active:scale-95"
            >
              View Client Success Stories
            </Link>
          </div>
        </div>

        {/* Right Column - Steps as Responsive Cards */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center">
          <div className="flex flex-col w-full gap-3 sm:gap-4">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#f8fafc] border border-slate-200/80 hover:border-blue-400 hover:bg-white rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 group/step cursor-pointer flex gap-4 sm:gap-5 items-start"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-100/80 text-[#2563eb] group-hover/step:bg-[#2563eb] group-hover/step:text-white font-bold text-sm sm:text-base flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                  {step.num}
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h4 className="text-[#1e293b] group-hover/step:text-[#2563eb] font-bold text-[15px] sm:text-[17px] mb-1.5 transition-colors tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-[#64748b] text-[12.5px] sm:text-[13px] font-medium leading-relaxed">
                    {step.text}
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
