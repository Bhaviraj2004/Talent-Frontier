export default function TeamBenefits() {
  const benefits = [
    "Organised\nRecords",
    "Clear\nCoordination",
    "Consistent\nCommunication",
    "Flexible\nSupport"
  ];

  return (
    <section className="w-full bg-white font-sans py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="border-t border-b border-gray-100 py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="text-[#0f172a] font-bold text-sm leading-tight pr-8 md:border-r border-gray-100 whitespace-pre-line text-center md:text-left mb-6 md:mb-0">
            The Benefits<br />for Your Team
          </div>
          
          <div className="flex flex-wrap md:flex-nowrap justify-between w-full flex-1">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className={`flex-1 text-[#0f172a] font-bold text-sm whitespace-pre-line text-center px-4 ${
                  idx < benefits.length - 1 ? 'border-r border-gray-100' : ''
                }`}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-xs">
            Support is delivered within approved systems, access controls and review processes.
          </p>
        </div>

      </div>
    </section>
  );
}
