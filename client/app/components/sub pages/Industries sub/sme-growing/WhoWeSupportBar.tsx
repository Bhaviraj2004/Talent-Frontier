export default function WhoWeSupportBar() {
  const types = [
    "Start-Ups",
    "Family Businesses",
    "Small Teams",
    "Established SMEs",
    "Expanding Companies",
    "Multi-Location Businesses"
  ];

  return (
    <section className="w-full bg-white py-8 border-b border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <h3 className="text-[#0f172a] font-bold text-[15px] sm:text-[16px] whitespace-nowrap shrink-0">
          Who We Support
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 w-full">
          {types.map((type, index) => (
            <div 
              key={index} 
              className="bg-slate-50/80 hover:bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer text-center flex items-center justify-center"
            >
              <span className="text-[#0f172a] group-hover:text-blue-600 text-[12.5px] sm:text-[13.5px] font-semibold leading-tight transition-colors">
                {type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
