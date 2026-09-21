import Link from 'next/link';
import { Users, Briefcase, FileText, MonitorSmartphone, PenTool, GitMerge } from 'lucide-react';

export default function AboutWhatWeDo() {
  const services = [
    { title: "Business\nSupport\nServices", icon: Briefcase, link: "/our-services/virtual-assistants-administration" },
    { title: "People &\nOperations\nSupport", icon: Users, link: "/our-services/people-operations" },
    { title: "Finance &\nAccounting\nSupport", icon: FileText, link: "/our-services/finance-accounting" },
    { title: "Technology,\nIT & AI\nSupport", icon: MonitorSmartphone, link: "/our-services/technology" },
    { title: "Brand, Marketing\n& Creative Support", icon: PenTool, link: "/our-services/brand-marketing" },
    { title: "Process &\nAutomation\nSupport", icon: GitMerge, link: "/our-services/process-automation" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#f4f8fb] font-sans text-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2 sm:mb-3">What We Do</h2>
        <p className="text-gray-600 text-sm mb-6 sm:mb-10 max-w-lg mx-auto">
          We provide flexible support across key business functions:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                href={service.link}
                className="relative z-10 flex flex-col items-center justify-center bg-white p-3.5 sm:p-4 py-4 sm:py-5 rounded-2xl shadow-sm border border-slate-200/90 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/15 hover:-translate-y-2 active:scale-95 active:bg-blue-50/30 transition-all duration-300 group cursor-pointer overflow-hidden text-center"
              >
                {/* Icon Container with Enhanced Hover Effect */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-50 border border-blue-100/80 flex items-center justify-center text-blue-600 mb-2.5 sm:mb-3 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-600/30 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.8} />
                </div>
                
                {/* Title */}
                <h4 className="text-[11px] sm:text-[12px] font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors duration-200 uppercase tracking-wide whitespace-pre-line text-center leading-snug">
                  {service.title}
                </h4>

                {/* Animated Bottom Indicator Line */}
                <div className="h-1 w-full bg-blue-600 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 rounded-b-2xl"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

