import Image from 'next/image';

export default function StrategicAndAdminOverview() {
  return (
    <section className="w-full bg-white">
      {/* Block 1: Leadership Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#0047FF] text-xs font-bold uppercase tracking-wider mb-4">
              Strategic Leadership
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight mb-6">
              Executive Guidance Without Full-Time Overhead
            </h2>
            <div className="text-gray-600 text-sm md:text-base space-y-4 leading-relaxed max-w-xl">
              <p>
                Not every growing organisation requires—or is ready for—another permanent senior executive salary. Some businesses need seasoned leadership specifically for a growth stage, operational turnaround, or strategic planning initiative.
              </p>
              <p>
                Talent Frontier helps businesses access fractional and virtual executives who deliver high-impact strategy, operational clarity, and executive oversight tailored to your specific schedule and budget.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl group border border-slate-100">
              <img 
                src="/sub pages/Services/Virtual CEO Services/Rectangle 148.png" 
                alt="Strategic Leadership Support" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Administrative Support with Split Cut */}
      <div className="w-full flex flex-col md:flex-row items-stretch bg-[#f8fafc] border-y border-slate-100">
        <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:pl-16 lg:pl-24 md:pr-10 py-16 md:py-24">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#0047FF] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
            Operational Leverage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight mb-6">
            Build Reliable Administrative Support
          </h2>
          <div className="text-gray-600 text-sm md:text-base max-w-lg space-y-4 leading-relaxed">
            <p>
              The right administrative professional keeps your team organised, customer-responsive, and focused on high-value business goals.
            </p>
            <p>
              Whether handling calendars, client correspondence, data maintenance, or routine back-office workflows, our virtual assistants integrate smoothly into your existing tools and workflows.
            </p>
          </div>
        </div>
        <div className="w-full md:w-7/12 relative aspect-[777/451] md:aspect-auto min-h-[260px] sm:min-h-[340px] md:min-h-[520px] group overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden [clip-path:none] md:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
            <Image
              src="/sub pages/Services/Business Support Services/Group 5.png"
              alt="Reliable Administrative Support"
              fill
              className="object-cover object-center md:object-left group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
