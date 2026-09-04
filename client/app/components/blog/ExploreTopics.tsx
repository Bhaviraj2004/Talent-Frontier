import Image from 'next/image';
import Link from 'next/link';

const topics = [
  { title: 'Business Insights', desc: 'Practical perspectives on business strategy, leadership, operational priorities and informed decision-making.', img: '/Blog page/Rectangle 49.png' },
  { title: 'Technology & Automation', desc: 'Insights into artificial intelligence, workflow automation, CRM systems and the practical use of digital tools.', img: '/Blog page/Rectangle 52.png' },
  { title: 'Finance & Operations', desc: 'Guidance on financial administration, operational efficiency, reporting and building consistent business processes.', img: '/Blog page/Rectangle 55.png' },
  { title: 'Workforce & Business Growth', desc: 'Perspectives on workforce planning, business capacity, team development and sustainable organisational growth.', img: '/Blog page/Rectangle 56.png' }
];

const categories = [
  "Technology & Automation",
  "Finance & Operations",
  "Workforce & Business Growth"
];

export default function ExploreTopics() {
  return (
    <section className="w-full bg-white pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] tracking-tight">
            Explore Our Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button key={idx} className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-[13px] font-semibold transition-colors shadow-sm">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-[#f8fafc] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100">
              <div className="relative w-full h-[180px]">
                <Image src={topic.img} alt={topic.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[16px] font-bold text-[#0f172a] mb-3">{topic.title}</h3>
                <p className="text-[#64748b] text-[12px] leading-relaxed mb-6 flex-1 font-medium">
                  {topic.desc}
                </p>
                <Link href="#" className="inline-flex items-center text-[#3b82f6] text-[12px] font-bold group mt-auto w-fit">
                  Read Article 
                  <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
