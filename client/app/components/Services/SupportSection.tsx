import Image from 'next/image';

export default function SupportSection() {
  return (
    <section className="w-full bg-white py-10 md:py-16 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#1e293b] mb-6 leading-[1.2] tracking-tight">
            Professionals for Every<br/>Part of Your Business
          </h2>
          <div className="flex flex-col gap-4 text-gray-600 text-[15px] md:text-base leading-relaxed font-medium">
            <p>
              Every business has different talent requirements.
            </p>
            <p>
              You may need a Bookkeeper to strengthen day-to-day finance operations, a Virtual Assistant to support your team, a Software Developer for a growing technology function, or an experienced executive to provide strategic leadership.
            </p>
            <p>
              Talent Frontier helps you find professionals across a broad range of business functions.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-[55%] relative aspect-[877/328] rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/Services page/Rectangle 2.png" 
            alt="Support team meeting" 
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 750px"
          />
        </div>
        
      </div>
    </section>
  );
}
