export default function WorkflowChallenges() {
  const challenges = [
    "Scattered\nInformation",
    "Delayed\nFollow-Ups",
    "Repetitive\nAdministration",
    "Limited\nVisibility"
  ];

  return (
    <section className="w-full bg-[#e6eaf3] font-sans py-16">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight">
            More properties.<br />More moving parts.
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-wrap sm:flex-nowrap justify-between gap-6">
          {challenges.map((challenge, idx) => (
            <div key={idx} className="flex-1">
              <h4 className="text-[#0f172a] font-bold text-sm whitespace-pre-line leading-tight">
                {challenge}
              </h4>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
