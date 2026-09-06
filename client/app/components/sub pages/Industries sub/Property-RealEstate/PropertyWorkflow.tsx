export default function PropertyWorkflow() {
  const steps = [
    "Enquiry",
    "Organise",
    "Coordinate",
    "Update",
    "Follow Up"
  ];

  return (
    <section className="w-full bg-white font-sans py-16">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-[30%]">
          <h3 className="text-xl font-bold text-[#0f172a] leading-tight">
            Our Property<br />Workflow
          </h3>
        </div>

        <div className="w-full md:w-[70%] flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-0 relative">
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-[#0f172a] font-bold text-xs">{step}</span>
              {idx < steps.length - 1 && (
                <div className="hidden sm:block w-12 md:w-16 h-px bg-blue-300 mx-4"></div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
