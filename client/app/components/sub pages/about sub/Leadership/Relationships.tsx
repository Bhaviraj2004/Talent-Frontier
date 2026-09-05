import Image from 'next/image';

export default function Relationships() {
  return (
    <section className="w-full bg-[#0a192f] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-5/12 text-white flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Relationships Before <br /> Transactions
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            We believe the best outcomes come from strong, lasting partnerships. We take the time to listen, understand and align with your goals—then deliver with consistency, respect and accountability.
          </p>
        </div>
        <div className="w-full md:w-7/12 relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden">
            <Image
              src="/sub pages/About/Leadership/Rectangle 32.png"
              alt="Relationships Before Transactions"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
