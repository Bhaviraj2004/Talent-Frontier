import Image from 'next/image';

export default function OrganisedWorkplace() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 mb-4 sm:mb-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-5/12 relative aspect-[560/270] md:aspect-auto md:h-[320px] rounded-2xl md:rounded-[24px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
          <Image
            src="/sub pages/Services/People & Operations Support/Workplace Image.png"
            alt="Organised Workplace"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-7/12 flex flex-col items-start space-y-4 md:pl-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a192f] leading-tight mb-2">
            Professionals We Can <br /> Help You Find
          </h2>
          <ul className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-lg space-y-2 list-disc pl-5">
            <li>HR Coordinators</li>
            <li>HR Administrators</li>
            <li>HR Assistants</li>
            <li>Recruiters</li>
            <li>Talent Acquisition Specialists</li>
            <li>Recruitment Coordinators</li>
            <li>People & Culture Coordinators</li>
            <li>HR Operations Professionals</li>
            <li>Onboarding Coordinators</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
