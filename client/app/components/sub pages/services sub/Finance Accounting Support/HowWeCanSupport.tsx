import Image from "next/image";

export default function HowWeCanSupport() {
  const supports = [
    "Bookkeeping",
    "Transaction recording",
    "Bank reconciliations",
    "Accounts payable",
    "Accounts receivable",
    "Payroll administration",
    "Month-end support",
    "Financial data preparation",
    "Management reporting support",
    "Finance administration"
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="text-center md:text-left mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          What These Professionals Can Support
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Depending on qualifications, experience and the position, responsibilities may include:
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {supports.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1150fb] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#1150fb] group-hover:text-white transition-colors">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
