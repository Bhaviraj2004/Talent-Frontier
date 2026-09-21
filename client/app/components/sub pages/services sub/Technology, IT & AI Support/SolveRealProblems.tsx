import Image from "next/image";

export default function SolveRealProblems() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row items-center gap-16">
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
        <ul className="text-gray-800 text-[15px] leading-relaxed max-w-md list-disc pl-5 space-y-2">
          <li>Software Developers</li>
          <li>Front-End Developers</li>
          <li>Back-End Developers</li>
          <li>Full-Stack Developers</li>
          <li>Web Developers</li>
          <li>Mobile App Developers</li>
          <li>IT Support Specialists</li>
          <li>QA & Testing Professionals</li>
          <li>Data Analysts</li>
          <li>Data Professionals</li>
          <li>AI Specialists</li>
          <li>Technical Support Professionals</li>
          <li>Cloud & Systems Professionals</li>
        </ul>
      </div>
    </section>
  );
}
