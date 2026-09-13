import Image from 'next/image';

export default function SupportingBusiness() {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col lg:flex-row rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#08154a] border border-slate-800/40">
        
        {/* Left Side: Images - perfectly fits entire photo without cropping */}
        <div className="w-full lg:w-3/5 relative flex items-center justify-center bg-[#06103b]/70 p-3 sm:p-5 lg:p-6">
          <div className="relative w-full aspect-[1764/891] rounded-xl overflow-hidden">
            <Image 
              src="/about page/talentpotraits.png" 
              alt="Talent Portraits" 
              fill 
              className="object-contain object-center" 
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-2/5 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Supporting<br className="hidden sm:inline" /> Growing Business
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            We work with businesses across different industries and stages of growth.
          </p>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Whether you need assistance with a specific function, additional operational capacity or ongoing business support, our approach can be shaped around your organisation.
          </p>
        </div>

      </div>
    </section>
  );
}
