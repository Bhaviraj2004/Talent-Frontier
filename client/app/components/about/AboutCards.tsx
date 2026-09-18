import Image from 'next/image';

export default function AboutCards() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        
        {/* Card 1 */}
        <div className="flex-1 bg-[#f8fafc] border border-gray-100 rounded-2xl sm:rounded-[24px] overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[340px] sm:min-h-[360px] hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 active:bg-blue-50/40 transition-all duration-300 group">
          <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h4 className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Who We Are</h4>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a] mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              Talent Frontier is a<br className="hidden sm:inline" /> business support partner
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              For organisations that need practical assistance across their everyday operations and growth priorities.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              From administration and people support to finance, technology, marketing and process improvement, we help businesses create clearer and more consistent ways of working.
            </p>
          </div>
          {/* Image Side - Responsive, edge-to-edge */}
          <div className="w-full sm:w-[42%] relative h-[250px] sm:h-auto min-h-[240px] sm:min-h-full self-stretch overflow-hidden">
            <Image 
              src="/about page/Rectangle 1.png" 
              alt="Who We Are" 
              fill 
              className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 25vw"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-[#f8fafc] border border-gray-100 rounded-2xl sm:rounded-[24px] overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[340px] sm:min-h-[360px] hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 active:bg-blue-50/40 transition-all duration-300 group">
          <div className="flex-1 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
            <h4 className="text-blue-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Why We Exist</h4>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a] mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              Helping Businesses Work<br className="hidden sm:inline" /> With Greater Clarity
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              As businesses grow, daily responsibilities become more complex.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Managing operations, people, finance, technology and communication can place pressure on internal teams. We provide the support and structure businesses need to stay organised, responsive and focused on what matters most.
            </p>
          </div>
          {/* Image Side - Responsive, edge-to-edge */}
          <div className="w-full sm:w-[42%] relative h-[250px] sm:h-auto min-h-[240px] sm:min-h-full self-stretch overflow-hidden">
            <Image 
              src="/about page/Screenshot 2026-09-06 004146.png" 
              alt="Why We Exist" 
              fill 
              className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 ease-out" 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 25vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
