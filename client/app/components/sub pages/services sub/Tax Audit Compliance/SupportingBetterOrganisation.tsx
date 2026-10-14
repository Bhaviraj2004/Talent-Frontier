import Image from "next/image";

export default function SupportingBetterOrganisation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
          Specialists We Can<br />Help You Find
        </h2>
        <ul className="text-gray-800 mb-6 max-w-lg text-[15px] list-disc pl-5 space-y-2">
          <li>Tax Accountants & Workpaper Preparers</li>
          <li>Audit Assistants & Assurance Associates</li>
          <li>BAS, IAS & GST Compliance Specialists</li>
          <li>Regulatory & Statutory Reporting Officers</li>
          <li>Internal Compliance & Controls Analysts</li>
          <li>Corporate Secretarial & ASIC Support</li>
          <li>Financial Statement Compilers</li>
          <li>Year-End Tax Pack Coordinators</li>
          <li>Audit Evidence & Sampling Coordinators</li>
          <li>Payroll Tax & FBT Support Specialists</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 relative aspect-[780/300] md:aspect-auto md:h-[340px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/Support Image — Finance team in office.png"
          alt="Supporting Tax and Audit Organisation"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
