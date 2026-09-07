import Link from 'next/link';
import { Landmark, HeartPulse, Factory, ShoppingCart, Cpu, GraduationCap, Truck, Zap, ArrowRight } from 'lucide-react';

export default function IndustriesPreview() {
  const industries = [
    {
      title: "Finance",
      description: "Driving stability, compliance and sustainable growth.",
      icon: Landmark,
      href: "/industries/finance-and-accounting"
    },
    {
      title: "Healthcare",
      description: "Improving outcomes through innovative and secure solutions.",
      icon: HeartPulse,
      href: "/industries"
    },
    {
      title: "Manufacturing",
      description: "Optimising production and supply chains for efficiency.",
      icon: Factory,
      href: "/industries"
    },
    {
      title: "Retail & E-commerce",
      description: "Enhancing customer experiences across every channel.",
      icon: ShoppingCart,
      href: "/industries/ecommerce-and-retail"
    },
    {
      title: "Technology",
      description: "Building scalable and future-ready digital solutions.",
      icon: Cpu,
      href: "/industries/technology-and-digital"
    },
    {
      title: "Education",
      description: "Empowering institutions and learners with smart systems.",
      icon: GraduationCap,
      href: "/industries"
    },
    {
      title: "Logistics",
      description: "Streamlining operations and delivery every time.",
      icon: Truck,
      href: "/industries"
    },
    {
      title: "Energy",
      description: "Powering progress with sustainable and reliable solutions.",
      icon: Zap,
      href: "/industries"
    }
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                INDUSTRY PREVIEW
              </p>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-3 sm:mb-4 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl">
              Purpose-built solutions for every industry. We understand your challenges and deliver results that drive real impact.
            </p>
          </div>
          <Link href="/industries" className="hidden md:flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors gap-1 group">
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
        
        {/* Beautiful Box Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <Link
                key={idx}
                href={industry.href}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 hover:border-blue-500 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors duration-200 mb-2.5 leading-snug">
                    {industry.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors gap-1.5 pt-3 border-t border-gray-100">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </Link>
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
