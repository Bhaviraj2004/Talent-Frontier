import Image from 'next/image';

export default function BuiltAroundWorkflow() {
  const systems = [
    "Property\nSystems",
    "CRM\nPlatforms",
    "Document\nLibraries",
    "Marketing\nChannels"
  ];

  return (
    <section className="w-full font-sans bg-white flex flex-col md:flex-row">
      
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px]">
        <Image 
          src="/sub pages/Industries/Property & Real Estate/Image placeholder – Property team reviewing plans.png" 
          alt="Property team" 
          fill 
          className="object-cover" 
        />
      </div>

      {/* Right: Dark Navy Block */}
      <div className="w-full md:w-1/2 bg-[#08154a] p-12 md:p-20 flex flex-col justify-center">
        <div className="w-8 h-1 bg-blue-600 mb-6"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
          Built Around Your<br />Property Workflow
        </h2>
        
        <div className="flex flex-wrap gap-8 mb-12">
          {systems.map((system, idx) => (
            <div key={idx} className="flex-1 min-w-[100px]">
              <h4 className="text-white text-xs font-bold leading-tight whitespace-pre-line">
                {system}
              </h4>
            </div>
          ))}
        </div>

        <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
          Your team retains control of property decisions, approvals and client advice.
        </p>
      </div>

    </section>
  );
}
