import { Users, Briefcase, FileText, MonitorSmartphone, PenTool, GitMerge } from 'lucide-react';

export default function AboutWhatWeDo() {
  const services = [
    { title: "Business\nSupport\nServices", icon: Briefcase },
    { title: "People &\nOperations\nSupport", icon: Users },
    { title: "Finance &\nAccounting\nSupport", icon: FileText },
    { title: "Technology,\nIT & AI\nSupport", icon: MonitorSmartphone },
    { title: "Brand, Marketing\n& Creative Support", icon: PenTool },
    { title: "Process &\nAutomation\nSupport", icon: GitMerge },
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#f4f8fb] font-sans text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-3 sm:mb-4">What We Do</h2>
        <p className="text-gray-600 text-sm mb-10 sm:mb-20 max-w-lg mx-auto">
          We provide flexible support across key business functions:
        </p>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row justify-between items-stretch md:items-center max-w-5xl mx-auto gap-4 sm:gap-6 md:gap-0">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gray-300 z-0"></div>

          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center flex-1 bg-white md:bg-transparent p-4 sm:p-5 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-100 md:border-none hover:shadow-md md:hover:shadow-none transition-all duration-300">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-50 md:bg-white md:border md:border-gray-100 md:shadow-sm flex items-center justify-center text-blue-600 mb-3 md:mb-6 z-10 md:hover:shadow-md md:hover:border-blue-200 transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-[11px] sm:text-[12px] font-bold text-[#0f172a] uppercase tracking-wide whitespace-pre-line text-center">
                  {service.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
