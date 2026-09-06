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
    <section className="py-24 bg-[#f4f8fb] font-sans text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-4">What We Do</h2>
        <p className="text-gray-600 text-sm mb-20 max-w-lg mx-auto">
          We provide flexible support across key business functions:
        </p>

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto gap-12 md:gap-0">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gray-300 z-0"></div>

          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center flex-1">
                <div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-blue-600 mb-6 z-10">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wide whitespace-pre-line text-center px-2">
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
