import Image from 'next/image';

export default function StayOrganised() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="w-full md:w-5/12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Professionals We <br /> Can Help You Find
          </h2>
          <div className="w-24 h-[2px] bg-[#0047FF] mt-6"></div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6 pt-2">
          <ul className="text-gray-600 text-sm md:text-base leading-relaxed list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
            <li>Virtual Assistants</li>
            <li>Executive Assistants</li>
            <li>Administrative Assistants</li>
            <li>Personal Assistants</li>
            <li>Data Entry Specialists</li>
            <li>Customer Support Professionals</li>
            <li>Appointment Coordinators</li>
            <li>Office Administration Professionals</li>
            <li>Operations Assistants</li>
          </ul>
        </div>
      </div>
      
      <div className="w-full relative aspect-[1286/329] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 mt-8">
        <Image
          src="/sub pages/Services/Business Support Services/Rectangle 105.png"
          alt="Business Operations"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
