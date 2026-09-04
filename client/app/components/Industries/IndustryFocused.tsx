import Image from 'next/image';

export default function IndustryFocused() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 lg:mb-20">
          <div className="md:max-w-[45%]">
            <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-4">
              Build Around How Your Business Works.
            </h4>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#0f172a] leading-[1.15] tracking-tight">
              Industry-Focused<br />Support
            </h2>
          </div>
          <p className="text-[#64748b] text-[14px] leading-relaxed md:max-w-[45%] font-medium mt-1">
            We take the time to understand your industry environment—including your processes, customer expectations, technology stack and day-to-day priorities. This insight allows us to deliver business support that fits naturally within your operations and helps you move forward with confidence.
          </p>
        </div>

        {/* Image */}
        <div className="w-full relative h-[350px] sm:h-[450px] md:h-[500px] rounded-[32px] overflow-hidden shadow-sm">
          <Image 
            src="/Industries page/Rectangle 19.png" 
            alt="Team meeting" 
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
