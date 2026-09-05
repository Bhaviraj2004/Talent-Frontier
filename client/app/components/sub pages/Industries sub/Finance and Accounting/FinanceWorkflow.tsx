export default function FinanceWorkflow() {
  const steps = [
    { num: '01', label: 'Collect' },
    { num: '02', label: 'Organise' },
    { num: '03', label: 'Process' },
    { num: '04', label: 'Review' },
    { num: '05', label: 'Report' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#0f172a] text-center mb-12 tracking-tight">
          Support Across the Finance Workflow
        </h2>

        {/* 5 Steps with Connecting Horizontal Lines */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              
              {/* Step info */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold tracking-tight">
                  {step.num}
                </span>
                <span className="text-[#0f172a] text-[13px] sm:text-[14px] font-semibold mt-1">
                  {step.label}
                </span>
              </div>

              {/* Connecting Line (not after the last step) */}
              {idx < steps.length - 1 && (
                <div className="hidden sm:block w-8 md:w-12 lg:w-16 h-[1.5px] bg-gray-300 -mt-5" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
