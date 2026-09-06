import { Target, Eye, Users, TrendingUp } from 'lucide-react';

export default function BusinessOverview() {
  const cards = [
    {
      title: "Our Mission",
      description: "To help businesses work smarter by bringing the right expertise, technology and support together.",
      icon: Target,
    },
    {
      title: "Our Vision",
      description: "To build flexible business capabilities that create clarity, efficiency and sustainable growth.",
      icon: Eye,
    },
    {
      title: "Our Approach",
      description: "Practical, tailored solutions designed around each organisation's real operational needs.",
      icon: Users,
    },
    {
      title: "Our Promise",
      description: "Reliable support, transparent communication and outcomes that move your business forward.",
      icon: TrendingUp,
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <p className="text-[#0f172a] text-xs font-bold tracking-widest uppercase mb-4">
          BUSINESS OVERVIEW
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
          Solutions That Drive Real Impact
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          We partner with organisations to solve challenges, optimise operations and unlock new growth opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 text-left shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#eff6ff] text-[#2563eb] rounded-2xl flex items-center justify-center mb-8">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
