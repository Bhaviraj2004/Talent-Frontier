import Image from 'next/image';

export default function IndustriesCTA() {
  return (
    <section className="w-full bg-white pb-24 font-sans">
      <div className="max-w-[1400px] mx-auto lg:px-16">
        <div className="w-full bg-[#0d4cfd] overflow-hidden flex flex-col md:flex-row shadow-lg">
          
          {/* Left Content */}
          <div className="w-full md:w-[45%] p-10 md:p-14 lg:p-20 flex flex-col justify-center">
            <h2 className="text-[28px] md:text-[34px] font-bold text-white mb-6 tracking-tight leading-[1.2]">
              Don't see your<br/>industry listed?
            </h2>
            <p className="text-white/90 text-[14px] leading-relaxed mb-10 max-w-[360px] font-medium">
              Our services are not limited to these sectors. Tell us how your business operates and what kind of support you require.
            </p>
            <div>
              <button className="bg-white hover:bg-gray-100 text-[#0d4cfd] px-8 py-3.5 rounded-md font-bold text-[13px] transition-colors shadow-md">
                Talk to Our Team
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-[55%] relative min-h-[300px] md:min-h-full">
            <Image 
              src="/Industries page/Rectangle 20.png" 
              alt="Office interior" 
              fill
              className="object-cover object-center"
            />
            {/* Blend left edge of image */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0d4cfd] to-transparent hidden md:block"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
