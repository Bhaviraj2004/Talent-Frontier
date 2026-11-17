import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#091535] text-white overflow-hidden">
      {/* Background Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0047FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Find Executive Leadership & Administrative Support
        </h2>
        <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Tell us about your organization&apos;s current priorities, administrative workload, or executive capability needs. We will connect you with experienced professionals tailored to your requirements.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0047FF] hover:bg-blue-600 active:scale-95 text-white font-semibold py-3.5 px-8 rounded-lg transition-all duration-200 text-sm shadow-lg shadow-blue-900/30"
          >
            Find Administrative & Executive Talent
          </Link>
          <Link 
            href="/our-services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 active:scale-95 text-white font-medium py-3.5 px-8 rounded-lg transition-all duration-200 text-sm backdrop-blur-sm border border-white/10"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
