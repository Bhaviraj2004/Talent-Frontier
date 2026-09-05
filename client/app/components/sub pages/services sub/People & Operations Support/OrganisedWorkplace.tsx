import Image from 'next/image';

export default function OrganisedWorkplace() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-20 mb-10">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-5/12 relative h-[250px] md:h-[300px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-sm">
            <Image
              src="/sub pages/Services/People & Operations Support/Workplace Image.png"
              alt="Organised Workplace"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col items-start space-y-4 md:pl-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a192f] leading-tight mb-2">
            Supporting a More <br /> Organised Workplace
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-lg">
            Growing teams create more responsibilities across communication, document management and data coordination. Our support helps organise these agreed activities, maintain accurate records and keep your operations running smoothly. Management decisions remain with authorised leaders.
          </p>
          <p className="text-[#0047FF] font-bold text-sm md:text-base max-w-sm mt-4">
            Clear coordination helps people, <br /> managers and operations stay aligned.
          </p>
        </div>
      </div>
    </section>
  );
}
