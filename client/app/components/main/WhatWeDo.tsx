import Link from 'next/link';
import { LayoutGrid, Settings, BarChart2, CloudLightning, AlertTriangle, UserCheck, ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      title: "Strategy &\nConsulting",
      description: "Crafting winning strategies that accelerate growth.",
      icon: LayoutGrid,
    },
    {
      title: "Technology\nSolutions",
      description: "Modern technology solutions for a digital future.",
      icon: Settings,
    },
    {
      title: "Business\nOperations",
      description: "Optimising operations to improve efficiency.",
      icon: BarChart2,
    },
    {
      title: "Cloud & Digital\n",
      description: "Scalable cloud solutions that drive agility.",
      icon: CloudLightning,
    },
    {
      title: "Risk & Compliance\n",
      description: "Strengthening governance and risk management.",
      icon: AlertTriangle,
    },
    {
      title: "Customer\nExperience",
      description: "Enhancing experience that builds loyalty.",
      icon: UserCheck,
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">
                SERVICE PREVIEW
              </p>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] mb-3 sm:mb-4 tracking-tight">
              What We Do
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl">
              End-to-end solutions designed to streamline operations and accelerate sustainable growth.
            </p>
          </div>
          <Link href="/services" className="hidden md:flex items-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors gap-1">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col relative overflow-hidden group">
                <div className="text-blue-600 mb-5 sm:mb-6">
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2 sm:mb-3 whitespace-pre-line leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Bottom colored bar */}
                <div className="h-1 w-full bg-blue-600 absolute bottom-0 left-0 scale-x-75 origin-left group-hover:scale-x-100 transition-transform"></div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/services" className="flex items-center justify-center text-blue-600 font-bold text-sm hover:text-blue-800 transition-colors gap-1">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
