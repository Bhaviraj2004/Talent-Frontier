import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="w-full bg-[#0b4ed6] text-white py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-4">
              LET'S BUILD YOUR TEAM
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Build Your Team?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
              Tell us what you're looking for. We'll help you find the right talent for your business.
            </p>
          </div>
          <div>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-white text-[#0f172a] px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
