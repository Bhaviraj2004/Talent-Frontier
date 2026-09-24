import Link from "next/link";

export default function YourBusinessSection() {
  const talentFrontierItems = [
    "Understanding your requirements",
    "Market and talent research",
    "Identifying relevant professionals",
    "Profile assessment",
    "Shortlisting",
    "Communication and coordination",
    "Introductions",
    "Transition support",
  ];

  const organisationItems = [
    "Your business priorities",
    "The professionals you meet",
    "Your preferred working arrangements",
    "The final decision",
    "Terms and conditions",
    "The ongoing relationship",
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
            A CLEAR PARTNERSHIP
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1a2332] mb-4 tracking-tight">
            Your Business. Your Decision.{" "}
            <br className="hidden sm:block" />
            Our Expertise.
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We simplify the journey while keeping you in control.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Talent Frontier Card */}
          <div className="bg-[#0A1128] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#2563eb] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Talent Frontier</h3>
              </div>
              <p className="text-blue-200/70 text-xs font-bold uppercase tracking-widest mb-6">
                WE TAKE CARE OF
              </p>
              <ul className="space-y-3">
                {talentFrontierItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Your Organisation Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 relative overflow-hidden group hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#f0f5ff] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a2332]">Your Organisation</h3>
              </div>
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                YOU REMAIN IN CONTROL OF
              </p>
              <ul className="space-y-3">
                {organisationItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <svg className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
