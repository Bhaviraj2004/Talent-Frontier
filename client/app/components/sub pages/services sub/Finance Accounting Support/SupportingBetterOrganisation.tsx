import Image from "next/image";

export default function SupportingBetterOrganisation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
          Supporting Better<br />Financial Organisation
        </h2>
        <p className="text-gray-800 mb-6 max-w-lg text-[15px]">
          Accurate, organised financial information supports better
          visibility and decision-making.
        </p>
        <p className="text-gray-800 mb-10 max-w-lg text-[15px]">
          We work within your approved systems, permissions
          and processes.
        </p>
        <p className="text-[#1150fb] font-semibold text-sm">
          Organised records. Clear workflows. Appropriate oversight.
        </p>
      </div>
      <div className="w-full md:w-1/2 relative aspect-[780/300] md:aspect-auto md:h-[340px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/Support Image — Finance team in office.png"
          alt="Supporting Better Financial Organisation"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
