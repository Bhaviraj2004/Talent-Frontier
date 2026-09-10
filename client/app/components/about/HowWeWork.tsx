import { Search, ClipboardList, Settings, Send, BarChart2, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
    <section className="py-12 sm:py-24 bg-[#08154a] font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-20 gap-6 sm:gap-10">
          <div className="flex-1">
            <h4 className="text-blue-500 text-sm font-bold mb-3 sm:mb-4">How We Work</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Understand First. Support Better.</h2>
          </div>
          <div className="flex-1 max-w-lg">
            <p className="text-slate-300 text-sm leading-relaxed">
              We begin by understanding your business, current processes and specific challenges. From there, we create a clear support structure designed around your requirements.
            </p>
          </div>
        </div>

        <div className="flex overflow-x-auto md:overflow-visible md:flex-row justify-start md:justify-between items-center max-w-5xl mx-auto gap-x-4 md:gap-x-0 mb-10 md:mb-16 pb-4 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex items-center justify-center flex-shrink-0 md:flex-1 snap-center">
                <div className="flex flex-col items-center mx-auto px-4 md:px-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-slate-500 flex items-center justify-center text-white mb-3 sm:mb-4 hover:bg-blue-600 transition-colors cursor-default shadow-sm">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xs font-medium text-white text-center whitespace-nowrap">
                    {step.title}
                  </h4>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex-shrink-0 mx-2 md:mx-4 text-slate-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Link href="/about/our-approach" className="bg-white hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-semibold text-sm transition-colors flex items-center gap-2">
            Explore Our Approach <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
