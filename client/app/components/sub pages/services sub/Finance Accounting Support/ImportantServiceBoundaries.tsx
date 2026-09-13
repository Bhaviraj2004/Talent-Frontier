export default function ImportantServiceBoundaries() {
  const boundaries = [
    { title: "Tax Advice", note: "Authorised advice only" },
    { title: "Financial Advice", note: "Licensed advisors only" },
    { title: "Auditing", note: "Registered auditors only" },
    { title: "Statutory Reporting", note: "Certified personnel only" },
    { title: "BAS-Agent Services", note: "Registered BAS agents only" },
    { title: "Tax-Agent Services", note: "Registered tax agents only" },
    { title: "Independent Approvals", note: "Internal authorised leaders only" },
  ];

  return (
    <section className="w-full bg-[#f4f7fe] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
        <div className="w-full lg:w-1/3">
          <span className="text-[#0047FF] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2 block">
            Compliance & Scope
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Important<br />Service Boundaries
          </h2>
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-md">
            The following services should only be offered where appropriate capability, professional qualifications, and regulatory registrations are available.
          </p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {boundaries.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-4.5 shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-[#0047FF] flex items-center justify-center shrink-0 group-hover:bg-[#0047FF] group-hover:text-white transition-colors duration-200">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-bold text-sm sm:text-[15px] group-hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-gray-500 text-xs">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
