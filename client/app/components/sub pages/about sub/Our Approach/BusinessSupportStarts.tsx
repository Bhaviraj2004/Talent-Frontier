import Image from "next/image";
import Link from "next/link";

export default function BusinessSupportStarts() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
          OUR APPROACH
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4 sm:mb-6 leading-tight">
          Business Support Starts <br className="hidden md:block" />
          With Understanding <br className="hidden md:block" />
          Your Business.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 sm:mb-8 max-w-md">
          Every successful partnership begins with understanding your 
          business, its challenges and its goals. We take the time to 
          deliver the right support.
        </p>
        <div>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg sm:rounded-sm transition duration-300 text-sm text-center shadow-sm"
          >
            Tell Us What You Need
          </Link>
        </div>
      </div>

      {/* Right Image - Framed in clean card container */}
      <div className="w-full md:w-1/2 relative aspect-[640/470] md:aspect-auto md:h-[420px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 border border-gray-100 bg-slate-50 group cursor-pointer transition-all duration-300">
        <Image
          src="/sub pages/About/Our Approach/Hero Image — replace with source photo.png"
          alt="Team discussing at a table"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
