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
    <section className="w-full bg-white py-6 border-b border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-16">
        <h3 className="text-[#0f172a] font-bold text-[14px] md:text-[15px] whitespace-nowrap shrink-0">
          Who We Support
        </h3>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {types.map((type, index) => (
            <span key={index} className="text-[#64748b] text-[13px] font-medium whitespace-nowrap">
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
