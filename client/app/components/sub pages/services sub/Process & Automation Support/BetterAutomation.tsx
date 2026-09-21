import Image from "next/image";

export default function BetterAutomation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16 border-b border-gray-200">
      <div className="w-full md:w-[40%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-6 text-[#091535] leading-tight max-w-sm">
          Professionals We Can Help You Find
        </h2>
        <ul className="text-gray-600 text-[14px] leading-relaxed max-w-xs list-disc pl-5 space-y-2">
          <li>Workflow Automation Specialists</li>
          <li>Business Automation Specialists</li>
          <li>CRM Specialists</li>
          <li>Business Systems Specialists</li>
          <li>Integration Specialists</li>
          <li>No-Code Developers</li>
          <li>Low-Code Developers</li>
          <li>Process Improvement Professionals</li>
          <li>Automation Developers</li>
        </ul>
      </div>
      <div className="w-full md:w-[60%] relative aspect-[794/258] md:aspect-auto md:h-[300px] rounded-2xl md:rounded-[24px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Process & Automation Support/Editable Shape (1).png"
          alt="Better Automation"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
