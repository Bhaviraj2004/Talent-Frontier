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
    <section className="w-full bg-[#f8fafc] pb-16 sm:pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-[#0b1a78] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-lg">
          
          {/* Left Title Area */}
          <div className="lg:w-1/4 p-6 sm:p-10 lg:p-12 lg:border-r border-[#1e329c] flex flex-col justify-center">
            <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
              VALUE PROPOSITION
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Why Businesses<br className="hidden sm:inline" /> Choose Us
            </h2>
          </div>
          
          {/* Right Grid Area */}
          <div className="lg:w-3/4 grid grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-4 sm:p-8 lg:p-10 flex flex-col group hover:bg-[#112285] active:bg-[#152a9e] transition-all duration-300 cursor-default
                    ${idx % 2 === 0 ? 'border-r lg:border-r-0' : ''}
                    ${idx !== values.length - 1 ? 'lg:border-r' : ''} 
                    ${idx < 2 ? 'border-b lg:border-b-0' : ''}
                    border-[#1e329c]
                  `}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#1d4ed8] text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-8 shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-white group-hover:text-blue-200 transition-colors duration-200 mb-1.5 sm:mb-4">{val.title}</h3>
                  <p className="text-blue-100 text-[11px] sm:text-sm leading-relaxed opacity-90">
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
