export default function PropertyWorkflowSection() {
  const steps = ['Enquiry', 'Organise', 'Coordinate', 'Update', 'Follow Up'];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-14">
          
          {/* Left Title */}
          <div className="flex-shrink-0">
            <div className="w-8 h-[3px] bg-[#2563eb] mb-2" />
            <h3 className="text-[#0f172a] font-bold text-[16px] sm:text-[17px] leading-tight">
              Our Property<br />Workflow
            </h3>
          </div>

          {/* Right 5 Steps with Lines */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 max-w-4xl">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-6 lg:gap-8">
                <span className="text-[#0f172a] font-medium text-[13px] sm:text-[14px]">
                  {step}
                </span>
                {idx < steps.length - 1 && (
                  <div className="w-4 sm:w-8 md:w-16 h-[1.5px] bg-[#2563eb]" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
