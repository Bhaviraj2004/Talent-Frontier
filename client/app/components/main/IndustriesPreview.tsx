import Link from 'next/link';
import { Landmark, HeartPulse, Factory, ShoppingCart, Cpu, GraduationCap, Truck, Zap, ArrowRight } from 'lucide-react';

export default function IndustriesPreview() {
  const industries = [
    {
      title: "Finance",
      description: "Driving stability, compliance and sustainable growth.",
      icon: Landmark,
    },
    {
      title: "Healthcare",
      description: "Improving outcomes through innovative and secure solutions.",
      icon: HeartPulse,
    },
    {
      title: "Manufacturing",
      description: "Optimising production and supply chains for efficiency.",
      icon: Factory,
    },
    {
      title: "Retail & E-\ncommerce",
      description: "Enhancing customer experiences across every channel.",
      icon: ShoppingCart,
    },
    {
      title: "Technology",
      description: "Building scalable and future-ready digital solutions.",
      icon: Cpu,
    },
    {
      title: "Education",
      description: "Empowering institutions and learners with smart systems.",
      icon: GraduationCap,
    },
    {
      title: "Logistics",
      description: "Streamlining operations and delivery every time.",
      icon: Truck,
    },
    {
      title: "Energy",
      description: "Powering progress with sustainable and reliable solutions.",
      icon: Zap,
    }
  ];

  return (
    <section className="w-full bg-white py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                INDUSTRY PREVIEW
              </p>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-500 text-base max-w-xl">
              Purpose-built solutions for every industry. We understand your challenges and deliver results that drive real impact.
            </p>
          </div>
          <Link href="/industries" className="hidden md:flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors gap-1">
            View All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-8 gap-0 pb-6 hide-scrollbar">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div key={idx} className="flex-shrink-0 w-64 lg:w-auto px-4 flex flex-col items-center text-center group border-r border-gray-100 last:border-r-0">
                <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-bold text-[#0f172a] mb-3 whitespace-pre-line leading-tight">
                  {industry.title}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed max-w-[160px]">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <Link href="/industries" className="inline-flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors gap-1">
            View All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
