import Image from 'next/image';

const steps = [
  { num: '01', title: 'Challenge', text: '[Client Challenge and context will appear here.]' },
  { num: '02', title: 'Support', text: '[Our Approach and Solutions And Support Provided will appear here.]' },
  { num: '03', title: 'Outcome', text: '[results and outcomes achieved will appear here.]' },
];

export default function ClientSuccessStory() {
  return (
    <section className="w-full bg-white py-24 md:py-32 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch">
        
        {/* Left Column - Intro */}
        <div className="w-full lg:w-[25%] flex flex-col justify-center">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#1e293b] mb-6 leading-[1.2] tracking-tight">
            From Business Challenges to Better Outcomes
          </h2>
          <p className="text-[#64748b] text-[14px] leading-relaxed font-medium">
            Explore detailed client stories to understand how our support approach can be applied to real business requirements.
          </p>
        </div>

        {/* Middle Column - Featured Card */}
        <div className="w-full md:w-[70%] lg:w-[40%] bg-[#08153b] rounded-3xl overflow-hidden shadow-xl flex flex-col">
          <div className="relative w-full h-[260px]">
            <Image 
              src="/Testimonials page/Rectangle 46.png" 
              alt="Success Story" 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-grow justify-between bg-gradient-to-b from-[#08153b] to-[#040b21]">
            <div>
              <p className="text-[#60a5fa] text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase mb-5 flex items-center">
                Professional Services <span className="mx-2 text-white/30">|</span> Client Success Story
              </p>
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-8 leading-snug tracking-tight">
                Supporting a Growing Business Through Structured Support
              </h3>
            </div>
            <button className="self-start bg-transparent border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-md text-[13px] font-semibold transition-colors mt-4">
              View Client Success Stories
            </button>
          </div>
        </div>

        {/* Right Column - Steps */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center">
          <div className="flex flex-col w-full max-w-[400px]">
            {steps.map((step, idx) => (
              <div key={idx} className={`py-6 flex gap-6 items-start ${idx !== steps.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <span className="text-[#3b82f6] font-medium text-[20px] leading-none shrink-0">{step.num}</span>
                <div className="flex flex-col">
                  <h4 className="text-[#1e293b] font-bold text-[16px] mb-2">{step.title}</h4>
                  <p className="text-[#64748b] text-[13px] font-medium leading-relaxed">
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
