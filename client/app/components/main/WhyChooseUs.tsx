import { ShieldCheck, Lightbulb, PieChart, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const values = [
    {
      title: "Reliable Expertise",
      description: "The right experience and specialist support for every challenge.",
      icon: ShieldCheck,
    },
    {
      title: "Practical Solutions",
      description: "Clear, tailored solutions built around real business needs.",
      icon: Lightbulb,
    },
    {
      title: "Flexible Support",
      description: "Capabilities that adapt as your organisation evolves.",
      icon: PieChart,
    },
    {
      title: "Measurable Impact",
      description: "Focused delivery that improves performance and growth.",
      icon: Users,
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="bg-[#0b1a78] rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Title Area */}
          <div className="lg:w-1/4 p-12 lg:border-r border-[#1e329c] flex flex-col justify-center">
            <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-4">
              VALUE PROPOSITION
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Why Businesses<br />Choose Us
            </h2>
          </div>
          
          {/* Right Grid Area */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-10 flex flex-col 
                    ${idx !== values.length - 1 ? 'lg:border-r border-[#1e329c]' : ''} 
                    ${idx < 2 ? 'border-b lg:border-b-0 border-[#1e329c]' : ''}
                    ${idx === 2 ? 'border-b md:border-b-0 border-[#1e329c]' : ''}
                  `}
                >
                  <div className="w-14 h-14 bg-[#1d4ed8] text-white rounded-2xl flex items-center justify-center mb-8">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{val.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed opacity-90">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
