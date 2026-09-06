import { Search, ClipboardList, Settings, Send, BarChart2, TrendingUp, ArrowRight } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    { title: "Understand", icon: Search },
    { title: "Plan", icon: ClipboardList },
    { title: "Set Up", icon: Settings },
    { title: "Deliver", icon: Send },
    { title: "Review", icon: BarChart2 },
    { title: "Improve", icon: TrendingUp },
  ];

  return (
    <section className="py-24 bg-[#08154a] font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="flex-1">
            <h4 className="text-blue-500 text-sm font-bold mb-4">How We Work</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Understand First. Support Better.</h2>
          </div>
          <div className="flex-1 max-w-lg">
            <p className="text-slate-300 text-sm leading-relaxed">
              We begin by understanding your business, current processes and specific challenges. From there, we create a clear support structure designed around your requirements.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-8 md:gap-0 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex items-center flex-1">
                <div className="flex flex-col items-center mx-auto">
                  <div className="w-16 h-16 rounded-full border border-slate-500 flex items-center justify-center text-white mb-4 hover:bg-blue-600 transition-colors cursor-default">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xs font-medium text-white text-center">
                    {step.title}
                  </h4>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-shrink-0 mx-4 text-slate-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-semibold text-sm transition-colors flex items-center gap-2">
            Explore Our Approach <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
