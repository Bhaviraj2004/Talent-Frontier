import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full bg-[#08154a] text-white py-16 sm:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-10">
          <div className="max-w-2xl">
            <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4">
              LET'S BUILD YOUR TEAM
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              Ready to Build Your Team?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Tell us what you're looking for. We'll help you find the right talent for your business.
            </p>
          </div>
          <div>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-white text-[#08154a] px-8 py-4 rounded-xl font-bold text-sm hover:bg-slate-100 active:bg-blue-50 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg w-full sm:w-auto text-center group"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
