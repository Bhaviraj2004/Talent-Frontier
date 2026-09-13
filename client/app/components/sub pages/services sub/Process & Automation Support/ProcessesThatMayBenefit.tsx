import Image from "next/image";

export default function ProcessesThatMayBenefit() {
  return (
    <section className="w-full bg-[#f4f7fe] py-12 sm:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row mb-10 sm:mb-12 gap-6 lg:gap-12 items-start justify-between">
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#091535] leading-tight mb-2">
              Processes That<br className="hidden sm:inline" /> May Benefit
            </h2>
            <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
              Common routine activities suited for workflow automation.
            </p>
          </div>
          
          <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              "Enquiry routing",
              "Meeting scheduling",
              "CRM updates",
              "Approval reminders",
              "Document generation",
              "Status notifications",
              "Task allocation",
              "Routine reporting",
              "Customer follow-ups",
              "Approved data transfer"
            ].map((process, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-xl p-3 sm:p-3.5 text-center text-xs sm:text-sm font-bold text-[#091535] hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default flex items-center justify-center min-h-[56px] shadow-sm"
              >
                {process}
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-500 text-xs mb-8 uppercase tracking-wider font-semibold">
          Suitability depends on the process, technology and information involved.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="relative w-full aspect-[279/155] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (3).png" alt="Process 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative w-full aspect-[279/155] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (4).png" alt="Process 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative w-full aspect-[279/155] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (5).png" alt="Process 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative w-full aspect-[279/155] rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/60">
            <Image src="/sub pages/Services/Process & Automation Support/Editable Shape (6).png" alt="Process 4" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
