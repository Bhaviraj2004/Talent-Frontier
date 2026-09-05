export default function WorkflowSection() {
  const steps = ['Plan', 'Organise', 'Coordinate', 'Review', 'Improve'];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag */}
        <span className="text-[#2563eb] text-[12px] font-bold tracking-wider uppercase block mb-8">
          OUR WORKFLOW
        </span>

        {/* 5 Steps with Connecting Lines */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-4xl">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              <span className="text-[#0f172a] font-semibold text-[14px] sm:text-[15px]">
                {step}
              </span>
              {idx < steps.length - 1 && (
                <div className="w-8 sm:w-12 md:w-16 h-[1.5px] bg-gray-300" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
