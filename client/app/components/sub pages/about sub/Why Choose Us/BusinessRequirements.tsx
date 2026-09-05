import Image from 'next/image';

export default function BusinessRequirements() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 mb-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
            <Image
              src="/sub pages/About/Why Choose Us/Rectangle 89.png"
              alt="Business Requirements Come First"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 pl-0 md:pl-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Your Business <br /> Requirements Come First
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            We take the time to understand your operations, current challenges and objectives before recommending the right services and support.
          </p>
          <div className="flex flex-col space-y-2 mt-4">
            <p className="text-[#0047FF] font-medium text-sm">Relevant People, Clear Communication.</p>
            <p className="text-[#0047FF] font-medium text-sm">A Stronger Business Partnership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
