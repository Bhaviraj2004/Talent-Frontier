import Image from 'next/image';

const executiveRoles = [
  'Virtual & Fractional CEOs',
  'Fractional COOs & Operations Executives',
  'Business Strategy Professionals',
  'Executive Advisors & Decision Partners',
  'Transformation & Change Leaders',
  'Senior Business Operations Directors'
];

const adminRoles = [
  'Virtual Assistants & Personal Assistants',
  'Executive Assistants (EA to CEO / Founders)',
  'Office Administration Professionals',
  'Operations & Process Assistants',
  'Appointment & Schedule Coordinators',
  'Data Entry & Customer Support Specialists'
];

export default function ProfessionalsWeFind() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        <div className="w-full lg:w-5/12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Professionals We <br /> Can Help You Find
          </h2>
          <div className="w-24 h-[2px] bg-[#0047FF] mt-6 mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            From strategic leadership that guides company direction to dedicated administrative specialists who keep daily operations running seamlessly.
          </p>
        </div>

        <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
          {/* Executive & Leadership Roles */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-[#0047FF] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
              Strategic & Fractional Leadership
            </h3>
            <ul className="text-gray-700 text-sm md:text-[15px] space-y-3">
              {executiveRoles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Administrative Roles */}
          <div className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-[#0047FF] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0047FF]"></span>
              Dedicated Administrative Support
            </h3>
            <ul className="text-gray-700 text-sm md:text-[15px] space-y-3">
              {adminRoles.map((role, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Featured Banner Image */}
      <div className="w-full relative aspect-[1286/329] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 mt-6">
        <Image
          src="/sub pages/Services/Business Support Services/Rectangle 105.png"
          alt="Executive and Administrative Operations"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
