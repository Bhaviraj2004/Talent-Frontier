export default function ClearerPath() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
          THE RIGHT FIT
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1a2332] mb-5 sm:mb-6 leading-tight">
          A Clearer Path to{" "}
          <br className="hidden md:block" />
          the Right Fit
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 max-w-md">
          The right professional can make a meaningful difference to your organisation.
        </p>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
          Our approach is designed to make the journey simple, transparent and focused — from understanding your requirements to creating the right connection.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative aspect-[640/470] md:aspect-auto md:h-[420px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 border border-gray-100 bg-slate-50 group cursor-pointer transition-all duration-300">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
          alt="Professional consultation"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
