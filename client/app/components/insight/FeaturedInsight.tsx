import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedInsight() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-20 pb-12 sm:pb-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Header Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#0f172a] leading-tight md:max-w-md tracking-tight">
            Ideas That Support Better Business
          </h2>
          <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed md:max-w-[400px] font-medium">
            Business leaders are constantly balancing growth, efficiency, technology and changing workforce requirements.
          </p>
        </div>

        {/* Curved City Image */}
        <div className="w-full relative h-[100px] sm:h-[140px] md:h-[180px] lg:h-[220px] mb-10 sm:mb-16 overflow-hidden flex items-end">
          <Image 
            src="/Insight page/Vector 3.png" 
            alt="City Skyline" 
            fill
            className="object-contain object-bottom md:object-cover"
          />
        </div>

        {/* Featured Insight Card */}
        <div className="w-full flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-md">
            <Image 
              src="/Insight page/Rectangle 20.png" 
              alt="Feature Insight" 
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col py-4 sm:py-6">
            <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-3 sm:mb-5">
              Feature Insight
            </h4>
            <h3 className="text-[22px] sm:text-[28px] md:text-[34px] font-bold text-[#0f172a] mb-4 sm:mb-6 leading-[1.2] tracking-tight">
              How to Identify Processes That Are Ready for Automation
            </h3>
            <p className="text-[#64748b] text-[13px] sm:text-[14px] leading-relaxed mb-8 sm:mb-10 max-w-lg font-medium">
              Not every business process should be automated. Learn how to identify repetitive, rule-based activities where automation may improve efficiency and consistency.
            </p>
            <Link 
              href="/insight/hardinsight" 
              className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-semibold text-[13px] transition-colors w-full sm:w-fit flex items-center justify-center gap-3 shadow-md text-center"
            >
              Read the Article 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
