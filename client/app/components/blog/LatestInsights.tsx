import Image from 'next/image';
import Link from 'next/link';

const latest = [
  { title: 'When Does a Growing Business Need Additional Support?', desc: "Recognise the signs that increasing workloads may be affecting your team's capacity and business performance.", img: '/Blog page/Rectangle 61.png' },
  { title: 'Building More Consistent Financial Administration Processes', desc: 'Practical steps to organise recurring financial activities, supporting documentation and internal responsibilities.', img: '/Blog page/Rectangle 62.png' },
  { title: 'AI in Business: Where Should You Begin?', desc: 'Practical perspectives on business strategy, leadership, operational priorities and informed decision-making.', img: '/Blog page/Rectangle 63.png' },
  { title: 'Why Process Documentation Matters for Growing Businesses', desc: 'Discover how documented workflows can improve consistency, accountability and internal knowledge.', img: '/Blog page/Rectangle 64.png' }
];

const recommended = [
  { title: 'Technology-Assisted. Human-Led.', desc: 'Why human context, judgement and oversight remain essential when introducing technology and automation.', img: '/Blog page/Rectangle 65.png' },
  { title: 'Five Signs Your Business Processes Need More Structure', desc: 'Understand how inconsistent processes can affect communication, productivity and service quality.', img: '/Blog page/Rectangle 66.png' },
  { title: 'Preparing Your Finance Processes for Business Growth', desc: 'Understand how inconsistent processes can affect communication, productivity and service quality.', img: '/Blog page/Rectangle 67.png' }
];

export default function LatestInsights() {
  return (
    <section className="w-full bg-white pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Latest Insights Header */}
        <h2 className="text-[24px] md:text-[28px] font-bold text-[#0f172a] mb-8 tracking-tight border-t border-gray-200 pt-16">
          Latest Insights
        </h2>

        {/* Latest Insights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {latest.map((item, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-5">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[16px] font-bold text-[#0f172a] mb-3 leading-snug">{item.title}</h3>
              <p className="text-[#64748b] text-[12.5px] leading-relaxed mb-6 font-medium flex-1">
                {item.desc}
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                <span className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">5 min read</span>
                <Link href="#" className="inline-flex items-center text-[#3b82f6] text-[12px] font-bold hover:text-blue-700 transition-colors">
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-[20%] shrink-0">
            <h2 className="text-[20px] md:text-[22px] font-bold text-[#0f172a] tracking-tight">
              Recommended Reading
            </h2>
          </div>
          
          <div className="w-full lg:w-[80%] flex flex-col gap-8">
            {recommended.map((item, idx) => (
              <div key={idx} className={`flex flex-col sm:flex-row gap-6 md:gap-8 ${idx !== recommended.length - 1 ? 'border-b border-gray-100 pb-8' : ''}`}>
                <div className="relative w-full sm:w-[280px] h-[160px] sm:h-[140px] shrink-0 rounded-xl overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-[17px] font-bold text-[#0f172a] mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[#64748b] text-[13px] leading-relaxed mb-6 font-medium max-w-2xl">
                    {item.desc}
                  </p>
                  <div className="flex justify-end w-full mt-auto">
                    <span className="text-gray-500 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 group cursor-pointer hover:text-[#3b82f6] transition-colors">
                      7 min read
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
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
