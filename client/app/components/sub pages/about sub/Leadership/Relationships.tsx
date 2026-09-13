import Image from 'next/image';

export default function Relationships() {
  return (
    <section className="w-full bg-[#0a192f] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-5/12 text-white flex flex-col items-start space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Relationships Before <br className="hidden sm:inline" /> Transactions
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            We believe the best outcomes come from strong, lasting partnerships. We take the time to listen, understand and align with your goals—then deliver with consistency, respect and accountability.
          </p>
        </div>
        <div className="w-full md:w-7/12 relative aspect-[680/363] md:aspect-auto md:h-[380px] lg:h-[420px] rounded-2xl md:rounded-[24px] overflow-hidden shadow-lg border border-slate-700/40">
          <Image
            src="/sub pages/About/Leadership/Rectangle 32.png"
            alt="Relationships Before Transactions"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
