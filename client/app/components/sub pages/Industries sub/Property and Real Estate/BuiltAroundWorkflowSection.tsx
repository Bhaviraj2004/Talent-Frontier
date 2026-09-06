import Image from 'next/image';

export default function BuiltAroundWorkflowSection() {
  const items = [
    { line1: 'Property', line2: 'Systems' },
    { line1: 'CRM', line2: 'Platforms' },
    { line1: 'Document', line2: 'Libraries' },
    { line1: 'Marketing', line2: 'Channels' },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch justify-between shadow-xl">
          
          {/* Left Side: Workflow Image */}
          <div className="w-full lg:w-[48%] relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
            <Image
              src="/sub pages/Industries/Property and Real Estate/built-around-workflow.png"
              alt="Built Around Your Property Workflow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>

          {/* Right Side: Text & 4 Workflow Pillars */}
          <div className="w-full lg:w-[52%] p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
            <div className="w-8 h-[3px] bg-[#2563eb] mb-3" />
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight mb-8 tracking-tight">
              Built Around Your<br />
              Property Workflow
            </h2>

            {/* 4 Pillars in a row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {items.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug">
                    {item.line1}<br />{item.line2}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">
              Your team retains control of property decisions, approvals and client advice.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
