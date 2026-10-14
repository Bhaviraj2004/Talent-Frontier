import Image from "next/image";

export default function StructuredSupport() {
  return (
    <section className="w-full flex flex-col md:flex-row mt-6 md:mt-12">
      <div className="w-full md:w-1/2 bg-[#091535] text-white p-12 md:p-20 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Rigorous Compliance & Seamless Audit Readiness
          </h2>
          <p className="text-gray-300 mb-4 max-w-sm text-sm leading-relaxed">
            Statutory tax obligations and complex audit requirements demand structured, meticulous preparation behind the scenes.
          </p>
          <p className="text-gray-300 mb-10 max-w-sm text-sm leading-relaxed">
            Talent Frontier connects accounting firms and growing businesses with specialized tax and compliance professionals who streamline documentation and maintain audit-ready accuracy.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative aspect-[1440/602] md:aspect-auto min-h-[220px] md:min-h-0 group overflow-hidden">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/ChatGPT Image Sep 2, 2026, 12_51_44 PM 1.png"
          alt="Structured Compliance Support"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
