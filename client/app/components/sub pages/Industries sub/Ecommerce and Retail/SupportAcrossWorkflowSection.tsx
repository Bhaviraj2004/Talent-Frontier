import Image from 'next/image';

export default function SupportAcrossWorkflowSection() {
  const leftServices = [
    {
      num: '01',
      title: 'Product Administration',
      desc: 'Listings and product info',
    },
    {
      num: '02',
      title: 'Order Coordination',
      desc: 'Approved order workflows',
    },
    {
      num: '03',
      title: 'Customer Support',
      desc: 'Enquiries and updates',
    },
  ];

  const rightServices = [
    {
      num: '04',
      title: 'Content & Campaigns',
      desc: 'Digital marketing support',
    },
    {
      num: '05',
      title: 'Inventory Records',
      desc: 'Organised product data',
    },
    {
      num: '06',
      title: 'Process Automation',
      desc: 'Less repetitive work',
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbfbf9] rounded-[20px] md:rounded-[28px] p-8 sm:p-10 md:p-12 border border-gray-100">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight mb-8">
            Support Across Your Commerce Workflow
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 01, 02, 03 */}
            <div className="lg:col-span-3 flex flex-col space-y-3 sm:space-y-4">
              {leftServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-white hover:bg-blue-50/40 p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center mb-2 transition-colors duration-300">
                    {service.num}
                  </span>
                  <h3 className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14.5px] sm:text-[15.5px] leading-snug transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Column: Workflow Image */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative w-full aspect-[444/237] rounded-[16px] md:rounded-[20px] overflow-hidden shadow-md group">
                <Image
                  src="/sub pages/Industries/Ecommerce and Retail/commerce-workflow.png"
                  alt="Support Across Your Commerce Workflow"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 680px"
                />
              </div>
            </div>

            {/* Right Column: 04, 05, 06 */}
            <div className="lg:col-span-3 flex flex-col space-y-3 sm:space-y-4">
              {rightServices.map((service, idx) => (
                <div 
                  key={idx} 
                  className="bg-white hover:bg-blue-50/40 p-4 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center mb-2 transition-colors duration-300">
                    {service.num}
                  </span>
                  <h3 className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[14.5px] sm:text-[15.5px] leading-snug transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#64748b] text-[12px] sm:text-[13px] mt-0.5 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
