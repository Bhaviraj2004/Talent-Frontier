import Image from 'next/image';

export default function AboutCards() {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Card 1 */}
        <div className="flex-1 bg-[#f8fafc] border border-gray-100 rounded-xl overflow-hidden flex flex-col sm:flex-row">
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <h4 className="text-blue-600 text-sm font-bold mb-4">Who We Are</h4>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4 leading-tight">
              Talent Frontier is a<br />business support partner
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              For organisations that need practical assistance across their everyday operations and growth priorities.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              From administration and people support to finance, technology, marketing and process improvement, we help businesses create clearer and more consistent ways of working.
            </p>
          </div>
          <div className="w-full sm:w-[40%] relative min-h-[300px] sm:min-h-full">
            <Image src="/about page/Rectangle 1.png" alt="Who We Are" fill className="object-cover" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-[#f8fafc] border border-gray-100 rounded-xl overflow-hidden flex flex-col sm:flex-row">
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            <h4 className="text-blue-600 text-sm font-bold mb-4">Why We Exist</h4>
            <h3 className="text-2xl font-bold text-[#0f172a] mb-4 leading-tight">
              Helping Businesses Work<br />With Greater Clarity
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              As businesses grow, daily responsibilities become more complex.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Managing operations, people, finance, technology and communication can place pressure on internal teams. We provide the support and structure businesses need to stay organised, responsive and focused on what matters most.
            </p>
          </div>
          <div className="w-full sm:w-[40%] relative min-h-[300px] sm:min-h-full">
            <Image src="/about page/Screenshot 2026-09-06 004146.png" alt="Why We Exist" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
