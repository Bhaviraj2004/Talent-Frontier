import Image from 'next/image';
import Link from 'next/link';

export default function BusinessSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6 pr-0 md:pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            A Business Support <br className="hidden sm:inline" /> Partner Focused on the <br className="hidden sm:inline" /> Right Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            We take the time to understand your business, current challenges and objectives before recommending the right combination of services and support.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#0047FF] hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-6 rounded-lg sm:rounded-md transition-colors text-sm text-center shadow-sm"
          >
            Tell Us What You Need
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative aspect-[769/415] md:aspect-auto md:h-[400px] lg:h-[450px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm border border-slate-100">
          <Image
            src="/sub pages/About/Why Choose Us/Rectangle 88.png"
            alt="Business Support Partner"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
