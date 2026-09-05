import Image from "next/image";

export default function ProcessesThatMayBenefit() {
  return (
    <section className="w-full bg-[#f4f7fe] py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row mb-12 gap-8 md:gap-16">
          <div className="w-full md:w-[25%]">
            <h2 className="text-2xl font-bold text-[#091535] leading-tight">
              Processes That<br />May Benefit
            </h2>
          </div>
          <div className="w-full md:w-[75%] flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-y-4 gap-x-2 text-[#1150fb] font-semibold text-[13px]">
              <span>Enquiry routing</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Meeting scheduling</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>CRM updates</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Approval reminders</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Document generation</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-4 mt-4 text-[#1150fb] font-semibold text-[13px]">
              <span className="ml-0 md:ml-12">Status notifications</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Task allocation</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Routine reporting</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Customer follow-ups</span>
              <span className="text-[#1150fb] text-xl mx-2">•</span>
              <span>Approved data transfer</span>
            </div>
          </div>
        </div>
        
        <p className="text-center text-gray-400 text-[11px] mb-12 uppercase tracking-wider font-semibold">
          Suitability depends on the process, technology and information involved.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (3).png" alt="Process 1" fill className="object-cover" />
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (4).png" alt="Process 2" fill className="object-cover" />
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (5).png" alt="Process 3" fill className="object-cover" />
          </div>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (6).png" alt="Process 4" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
