import Image from 'next/image';

export default function OurCommitment() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        <div className="flex-1 relative w-full max-w-2xl">
          <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-0">
             <Image src="/about%20page/handshake.png" alt="Handshake" fill className="object-cover" />
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-5">Our Commitment</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
            Making Recruitment Work Better for Your Business
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light mb-10">
            Our goal is simple: to make hiring easier, more transparent and more effective for every business we work with.
          </p>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <p className="text-[#0f172a] font-bold text-sm tracking-wide">Your goals. Our focus. Better hires.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
