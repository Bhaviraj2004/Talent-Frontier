export default function ClientJourney() {
  const steps = [
    { num: '01', label: 'Enquiry' },
    { num: '02', label: 'Onboarding' },
    { num: '03', label: 'Delivery' },
    { num: '04', label: 'Reporting' },
    { num: '05', label: 'Follow-Up' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#0f172a] text-center mb-12 tracking-tight">
          Support Across the Client Journey
        </h2>

        {/* 5-Step Stepper Flow with Arrows */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              
              {/* Step Info */}
              <div className="flex flex-col items-center text-center">
                <span className="text-[#2563eb] text-2xl sm:text-3xl font-bold tracking-tight">
                  {step.num}
                </span>
                <span className="text-[#0f172a] text-[13px] sm:text-[14px] font-semibold mt-1">
                  {step.label}
                </span>
              </div>

              {/* Connecting Arrow (omitted after the last step) */}
              {idx < steps.length - 1 && (
                <div className="text-gray-300">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.8" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
