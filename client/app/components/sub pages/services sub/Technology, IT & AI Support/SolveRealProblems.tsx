import Image from "next/image";

export default function SolveRealProblems() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 md:py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%] relative aspect-[573/300] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Intro Image.png"
          alt="Solve Real Business Problems"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-[55%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-6 text-[#091535] leading-tight max-w-md">
          Professionals We Can Help You Find
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-800 text-[14px] sm:text-[15px] leading-relaxed max-w-xl">
          <ul className="list-disc pl-5 space-y-2">
            <li>Software Developers</li>
            <li>Full-Stack & Web Developers</li>
            <li>Mobile App Developers</li>
            <li>IT Support Specialists</li>
            <li>QA & Testing Professionals</li>
            <li>Data Analysts & Engineers</li>
            <li>AI & Machine Learning Specialists</li>
            <li>Cloud & DevOps Engineers</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2">
            <li>Workflow Automation Specialists</li>
            <li>CRM Specialists (Salesforce, HubSpot)</li>
            <li>Business Systems Specialists</li>
            <li>API & Integration Developers</li>
            <li>No-Code & Low-Code Developers</li>
            <li>Process Improvement Analysts</li>
            <li>Automation Developers</li>
            <li>Solutions Architects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
