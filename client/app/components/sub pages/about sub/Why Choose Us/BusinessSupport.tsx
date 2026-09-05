import Image from 'next/image';

export default function BusinessSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 pr-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            A Business Support <br /> Partner Focused on the <br /> Right Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
            We take the time to understand your business, current challenges and objectives before recommending the right combination of services and support.
          </p>
          <button className="bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-sm">
            Tell Us What You Need
          </button>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px]">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
            <Image
              src="/sub pages/About/Why Choose Us/Rectangle 88.png"
              alt="Business Support Partner"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
