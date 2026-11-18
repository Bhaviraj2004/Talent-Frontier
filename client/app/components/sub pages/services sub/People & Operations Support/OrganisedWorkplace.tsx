import Image from 'next/image';

export default function OrganisedWorkplace() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <div className="w-full md:w-[45%] relative aspect-[560/320] md:aspect-auto md:h-[340px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/People & Operations Support/Workplace Image.png"
          alt="Professionals We Can Help You Find"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-[55%] flex flex-col items-start">
        <h2 className="text-3xl md:text-[34px] lg:text-4xl font-bold text-[#091535] leading-tight mb-6">
          Professionals We Can <br /> Help You Find
        </h2>
        <ul className="text-gray-800 text-[14px] sm:text-[15px] leading-relaxed max-w-lg space-y-2.5 list-disc pl-5">
          <li>HR Coordinators</li>
          <li>HR Administrators</li>
          <li>HR Assistants</li>
          <li>Recruiters</li>
          <li>Receptionist</li>
          <li>Talent Acquisition Specialists</li>
          <li>Recruitment Coordinators</li>
          <li>People & Culture Coordinators</li>
          <li>HR Operations Professionals</li>
          <li>Onboarding Coordinators</li>
        </ul>
      </div>
    </section>
  );
}
