export default function BenefitsBar() {
  const benefits = [
    { line1: "More", line2: "Capacity" },
    { line1: "Clearer", line2: "Processes" },
    { line1: "Better", line2: "Visibility" },
    { line1: "Flexible", line2: "Support" }
  ];

  return (
    <section className="w-full bg-[#b8c9e6] py-16 md:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((item, idx) => (
          <div key={idx} className={`flex flex-col justify-center ${idx !== 0 ? 'lg:border-l border-white/40 lg:pl-12' : ''}`}>
            <h3 className="text-[#0b162c] font-bold text-2xl md:text-3xl lg:text-[32px] leading-tight tracking-tight">
              {item.line1}<br />{item.line2}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
