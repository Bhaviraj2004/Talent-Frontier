import Image from 'next/image';

export default function SupportOperations() {
  const operations = [
    { num: "01", title: "Property Administration", desc: "Records and documentation" },
    { num: "04", title: "Marketing Support", desc: "Campaign and content coordination" },
    { num: "02", title: "Listing Coordination", desc: "Approved property information" },
    { num: "05", title: "Inspection Scheduling", desc: "Calendar and appointment support" },
    { num: "03", title: "Client Communication", desc: "Enquiries and follow-ups" },
    { num: "06", title: "Process Improvement", desc: "Clearer property workflows" },
  ];

  return (
    <section className="w-full py-24 font-sans bg-white">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-lg">
          <Image 
            src="/sub pages/Industries/Property & Real Estate/Image placeholder – Aerial commercial property.png" 
            alt="Aerial commercial property" 
            fill 
            className="object-cover" 
          />
        </div>

        {/* Right: Text & List */}
        <div className="w-full lg:w-1/2">
          <div className="w-8 h-1 bg-blue-600 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12 leading-tight">
            Support Across Your<br />Property Operations
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {operations.map((op, idx) => (
              <div key={idx} className="border-t border-gray-100 pt-6">
                <div className="flex gap-4 mb-2">
                  <span className="text-blue-600 font-bold text-sm">{op.num}</span>
                  <h4 className="text-[#0f172a] font-bold text-sm">{op.title}</h4>
                </div>
                <p className="text-gray-500 text-xs ml-8 leading-relaxed">
                  {op.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
