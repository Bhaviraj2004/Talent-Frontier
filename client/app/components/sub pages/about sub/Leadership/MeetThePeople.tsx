import Image from 'next/image';
import Link from 'next/link';

export default function MeetThePeople() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Meet the People <br className="hidden sm:inline" /> Behind Our Business
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
            Our leadership team brings deep industry expertise, commercial insight and a people-first mindset to every partnership. We are committed to delivering exceptional outcomes with integrity and care.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#0047FF] hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg sm:rounded-md transition-all text-xs sm:text-sm text-center shadow-sm"
          >
            Tell Us What You Need
          </Link>
        </div>
        <div className="w-full md:w-1/2 relative aspect-[722/488] md:aspect-auto md:h-[420px] lg:h-[460px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm border border-slate-100">
          <Image
            src="/sub pages/About/Leadership/Rectangle 17.png"
            alt="People Behind Our Business"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
