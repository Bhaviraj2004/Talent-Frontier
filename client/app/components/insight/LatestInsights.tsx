import Image from 'next/image';
import Link from 'next/link';

const latest = [
  { title: 'When Does a Growing Business Need Additional Support?', desc: "Recognise the signs that increasing workloads may be affecting your team's capacity and business performance.", img: '/Insight page/Rectangle 61.png' },
  { title: 'Building More Consistent Financial Administration Processes', desc: 'Practical steps to organise recurring financial activities, supporting documentation and internal responsibilities.', img: '/Insight page/Rectangle 62.png' },
  { title: 'AI in Business: Where Should You Begin?', desc: 'Practical perspectives on business strategy, leadership, operational priorities and informed decision-making.', img: '/Insight page/Rectangle 63.png' },
  { title: 'Why Process Documentation Matters for Growing Businesses', desc: 'Discover how documented workflows can improve consistency, accountability and internal knowledge.', img: '/Insight page/Rectangle 64.png' }
];

const recommended = [
  { title: 'Technology-Assisted. Human-Led.', desc: 'Why human context, judgement and oversight remain essential when introducing technology and automation.', img: '/Insight page/Rectangle 65.png' },
  { title: 'Five Signs Your Business Processes Need More Structure', desc: 'Understand how inconsistent processes can affect communication, productivity and service quality.', img: '/Insight page/Rectangle 66.png' },
  { title: 'Preparing Your Finance Processes for Business Growth', desc: 'Understand how inconsistent processes can affect communication, productivity and service quality.', img: '/Insight page/Rectangle 67.png' }
];

export default function LatestInsights() {
  return (
    <section id="latest-insights" className="w-full bg-white pb-16 sm:pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Latest Insights Header */}
        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-[#0f172a] mb-6 sm:mb-8 tracking-tight border-t border-gray-200 pt-10 sm:pt-16">
          Latest Insights
        </h2>

        {/* Latest Insights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {latest.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative w-full h-[120px] sm:h-[180px] rounded-xl overflow-hidden mb-3 sm:mb-5">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[13px] sm:text-[16px] font-bold text-[#0f172a] mb-2 sm:mb-3 leading-snug">{item.title}</h3>
              <p className="text-[#64748b] text-[11px] sm:text-[12.5px] leading-relaxed mb-3 sm:mb-6 font-medium flex-1">
                {item.desc}
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-3 sm:pt-4">
                <span className="text-gray-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">5 min</span>
                <Link href="/insight/hardinsight" className="inline-flex items-center text-[#3b82f6] text-[11px] sm:text-[12px] font-bold hover:text-blue-700 transition-colors">
                  Read Article 
                  <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Recommended Reading */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-16 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
            <div>
              <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-1.5 block">
                CURATED ARTICLES
              </span>
              <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold text-[#0f172a] tracking-tight">
                Recommended Reading
              </h2>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-2 sm:mt-0 max-w-md">
              Handpicked insights to help strengthen your operations, strategy, and business systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recommended.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 hover:border-blue-400 p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-xl overflow-hidden mb-4 bg-slate-100">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 text-[10.5px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    Featured
                  </span>
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#64748b] text-[12.5px] sm:text-[13px] leading-relaxed mb-5 font-medium flex-1">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                        <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                      </svg>
                      7 min read
                    </span>
                    <Link 
                      href="/insight/hardinsight" 
                      className="inline-flex items-center text-blue-600 text-[12px] font-bold group-hover:text-blue-700 transition-colors gap-1"
                    >
                      Read Article
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
