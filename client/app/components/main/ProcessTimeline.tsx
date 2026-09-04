export default function ProcessTimeline() {
  const steps = [
    "Tell Us What\nYou Need",
    "We Source &\nScreen",
    "Review Shortlisted\nProfiles",
    "Interview &\nSelect",
    "We Support\nNext Steps"
  ];
  
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full font-sans text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-20 tracking-tight">A Clear Path to the Right Hire.</h2>
      
      <div className="relative flex flex-col md:flex-row justify-between items-start w-full">
        {/* Horizontal Line */}
        <div className="absolute top-7 left-14 right-14 h-[2px] bg-gray-200 hidden md:block -z-10"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center w-full md:w-auto mb-10 md:mb-0 relative z-10 bg-white md:bg-transparent">
            <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-md md:outline md:outline-8 md:outline-white">
              {idx + 1}
            </div>
            <p className="font-semibold text-gray-800 text-sm whitespace-pre-line px-2">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
