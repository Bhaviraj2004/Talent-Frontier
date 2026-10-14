import Image from "next/image";

export default function AccuracyAndAccountability() {
  const points = [
    "Audit-ready documentation standards",
    "Strict multi-level review procedures",
    "Statutory deadline tracking & control",
    "Secure document management & privacy",
    "Segregation of duties & access governance",
    "Transparent audit query escalation"
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
      <div className="w-full md:w-[55%] relative aspect-[645/405] md:aspect-auto md:h-[420px] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/Accuracy Image — Finance review.png"
          alt="Accuracy and Regulatory Accountability"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-10 text-gray-900 leading-tight">
          Precision, Governance & Accountability
        </h2>
        <div className="flex flex-col gap-5 mb-10">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="text-[#1150fb] font-semibold text-lg w-6">0{index + 1}</span>
              <span className="text-gray-800 text-[15px] font-medium">{point}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 text-[15px] leading-relaxed max-w-md">
          Final sign-offs, statutory lodgements, and formal tax positions remain with authorised principals and registered agents.
        </p>
      </div>
    </section>
  );
}
