import Image from 'next/image';

export default function BusinessRequirements() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 mb-6 sm:mb-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 relative aspect-[630/391] md:aspect-auto md:h-[380px] lg:h-[420px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 group transition-all duration-300">
          <Image
            src="/sub pages/About/Why Choose Us/Rectangle 89.png"
            alt="Business Requirements Come First"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6 pl-0 md:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Your Business <br className="hidden sm:inline" /> Requirements Come First
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            We take the time to understand your operations, current challenges and objectives before recommending the right services and support.
          </p>
          <div className="flex flex-col space-y-2 mt-2 sm:mt-4">
            <p className="text-[#0047FF] font-medium text-xs sm:text-sm">Relevant People, Clear Communication.</p>
            <p className="text-[#0047FF] font-medium text-xs sm:text-sm">A Stronger Business Partnership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
