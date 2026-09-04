import Image from 'next/image';

export default function WhyWeExist() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        <div className="flex-1 relative w-full max-w-2xl mx-auto">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl z-0">
             <Image src="/about%20page/recriument.png" alt="Discussion" fill className="object-cover" />
          </div>
          {/* Floating Blue Box */}
          <div className="absolute -bottom-8 lg:-bottom-12 right-4 lg:-right-8 bg-[#2563eb] text-white p-8 rounded-2xl shadow-2xl max-w-[280px] z-10">
            <div className="mb-4 text-white">
               {/* Team Icon */}
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Focused on helping growing businesses build stronger teams.
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-xl">
          <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-5">Why We Exist</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-[1.1] mb-6 tracking-tight">
            Great Businesses Need Great People.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            We simplify the way businesses hire by taking care of the sourcing, evaluating and coordinating—so you get the right people, faster.
          </p>
        </div>

      </div>
    </section>
  );
}
