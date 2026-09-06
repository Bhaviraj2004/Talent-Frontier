export default function WhoWeSupport() {
  const groups = [
    "Real Estate\nAgencies",
    "Property\nManagers",
    "Developers",
    "Commercial\nProperty",
    "Property\nConsultants",
    "Growing\nProperty Teams"
  ];

  return (
    <section className="w-full bg-white font-sans py-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="border-t border-b border-gray-100 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          
          <div className="text-blue-600 font-bold text-xs uppercase tracking-widest text-center lg:text-left whitespace-pre-line w-full lg:w-auto mb-4 lg:mb-0 pr-6 lg:border-r border-gray-100">
            WHO WE<br />SUPPORT
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between w-full flex-1 gap-y-6">
            {groups.map((group, idx) => (
              <div 
                key={idx} 
                className={`px-4 sm:px-6 md:px-8 text-center text-[#0f172a] text-xs font-bold leading-tight flex-1 whitespace-pre-line ${
                  idx < groups.length - 1 ? 'border-r border-gray-100' : ''
                }`}
              >
                {group}
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
