import Image from 'next/image';

export default function SupportingBusiness() {
  return (
    <section className="py-10 sm:py-20 px-4 sm:px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-sm">
        
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]">
          <Image 
            src="/about page/talentpotraits.png" 
            alt="Talent Portraits" 
            fill 
            className="object-cover object-center" 
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 bg-[#08154a] p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-8 leading-tight">
            Supporting<br />Growing Business
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            We work with businesses across different industries and stages of growth.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Whether you need assistance with a specific function, additional operational capacity or ongoing business support, our approach can be shaped around your organisation.
          </p>
        </div>

      </div>
    </section>
  );
}
