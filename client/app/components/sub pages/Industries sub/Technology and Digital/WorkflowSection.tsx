import { Calendar, FolderKanban, GitPullRequest, CheckSquare, Sparkles } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    { num: '01', title: 'Plan', desc: 'Scope & Sprint Alignment', icon: Calendar },
    { num: '02', title: 'Organise', desc: 'Backlog & Task Structuring', icon: FolderKanban },
    { num: '03', title: 'Coordinate', desc: 'Cross-functional Sync', icon: GitPullRequest },
    { num: '04', title: 'Review', desc: 'QA & Stakeholder Sign-off', icon: CheckSquare },
    { num: '05', title: 'Improve', desc: 'Retrospectives & Iteration', icon: Sparkles },
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag & Heading */}
        <div className="mb-6 sm:mb-8">
          <span className="text-[#2563eb] text-xs font-bold tracking-widest uppercase block mb-1">
            OUR WORKFLOW
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a] tracking-tight">
            Structured Execution for Fast-Moving Sprints
          </h3>
        </div>

        {/* 5 Steps Responsive Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-5xl">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className={`bg-slate-50/80 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                  idx === 4 
                    ? 'col-span-2 sm:col-span-3 lg:col-span-1' 
                    : 'col-span-1 sm:col-span-2 lg:col-span-1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#2563eb] text-xs font-bold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-md group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    Step {step.num}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 group-hover:text-[#2563eb] group-hover:border-blue-300 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14px] sm:text-[15px] transition-colors mb-0.5">
                    {step.title}
                  </h4>
                  <p className="text-[#64748b] text-[11px] sm:text-[11.5px] leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
