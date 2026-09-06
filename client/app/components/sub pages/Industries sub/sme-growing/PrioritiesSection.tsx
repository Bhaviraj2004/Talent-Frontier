import Image from 'next/image';

export default function PrioritiesSection() {
  const priorities = [
    "Responsibilities",
    "Systems",
    "Communication",
    "Review Process"
  ];

  return (
    <section className="w-full bg-white font-sans">
      <div className="w-full flex flex-col lg:flex-row">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
          <Image
            src="/sub pages/Industries/SMEs & Growing Businesses/Priorities image placeholder.png"
            alt="Business Priorities"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Top Dark Blue */}
          <div className="bg-[#0b162c] px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center gap-8 text-white">
            <h2 className="text-3xl md:text-[34px] font-bold leading-tight flex-1">
              More growth.<br />More priorities.
            </h2>
            <div className="flex flex-wrap md:flex-col gap-x-6 gap-y-3">
              <span className="text-[13px] font-medium text-gray-300">Increasing Workload</span>
              <span className="text-[13px] font-medium text-gray-300">Limited Capacity</span>
              <span className="text-[13px] font-medium text-gray-300">Changing Processes</span>
              <span className="text-[13px] font-medium text-gray-300">Disconnected Systems</span>
            </div>
          </div>

          {/* Bottom White/Grey */}
          <div className="bg-white px-8 py-12 md:px-16 md:py-16 flex-1 flex flex-col justify-center border-b border-r border-gray-100">
            <h3 className="text-2xl font-bold text-[#0f172a] mb-8">
              Built Around Your Priorities
            </h3>
            <div className="flex flex-col gap-4 mb-10 w-full max-w-md">
              {priorities.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <span className="text-[#0f172a] font-semibold text-[15px]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[#64748b] text-[13px] font-medium">
              Your team retains control of decisions, approvals and business direction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
