import Image from 'next/image';
import Link from 'next/link';

export default function PracticalSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-5/12 flex flex-col items-start space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Build a Stronger <br /> People Function
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            As organisations grow, managing recruitment, employee coordination and people operations becomes increasingly important.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Talent Frontier helps businesses connect with HR and people professionals aligned with their workforce requirements.
          </p>
        </div>
        <div className="w-full md:w-7/12 relative aspect-[790/600] md:aspect-auto md:h-[420px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
          <Image
            src="/sub pages/Services/People & Operations Support/Hero Image — replace with supplied photo.png"
            alt="Practical Support"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
