import Image from 'next/image';

export default function StayOrganised() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="w-full md:w-5/12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Helping Your <br /> Business Stay <br /> Organised
          </h2>
          <div className="w-24 h-[2px] bg-[#0047FF] mt-6"></div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6 pt-2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Routine administrative activities are essential, but they can take valuable time away from customers, strategy and business growth.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Talent Frontier provides structured support for agreed business activities, helping your organisation improve coordination and maintain consistent day-to-day operations.
          </p>
        </div>
      </div>
      
      <div className="w-full relative h-[350px] md:h-[450px] lg:h-[500px]">
        <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-sm">
          <Image
            src="/sub pages/Services/Business Support Services/Rectangle 105.png"
            alt="Business Operations"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-[#0047FF] text-lg md:text-xl font-medium inline-block border-b-2 border-transparent hover:border-[#0047FF] pb-1 cursor-default transition-colors">
          More organisation, Better coordination, More time for your core priorities.
        </p>
      </div>
    </section>
  );
}
