import Image from "next/image";

export default function AccuracyAndAccountability() {
  const points = [
    "Access permissions",
    "Approval authorities",
    "Documentation standards",
    "Review procedures",
    "Data-security requirements",
    "Escalation processes"
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-[55%] relative h-[350px] md:h-[500px]">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/Accuracy Image — Finance review.png"
          alt="Accuracy and Accountability"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-10 text-gray-900 leading-tight">
          Accuracy and Accountability
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
          Final approvals and professional accounting decisions<br/>
          remain with authorised personnel.
        </p>
      </div>
    </section>
  );
}
