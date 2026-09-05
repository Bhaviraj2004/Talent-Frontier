import Image from "next/image";

export default function TechnologySupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%]">
        <p className="text-[#1150fb] font-bold text-[11px] tracking-wider uppercase mb-4">
          Technology, IT & AI Support
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 text-[#091535] leading-tight">
          Technology Support<br />Designed Around<br />Your Business
        </h2>
        <p className="text-gray-800 mb-10 max-w-sm text-[15px] leading-relaxed">
          Practical support for smarter, safer and more<br />
          consistent ways of working.
        </p>
        <button className="bg-[#1150fb] hover:bg-blue-700 text-white px-8 py-3 text-sm font-semibold transition-colors w-fit rounded-sm">
          Discuss Your Technology Needs
        </button>
      </div>
      <div className="w-full md:w-[55%] relative h-[400px] md:h-[450px]">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/ChatGPT Image Sep 2, 2026, 01_37_30 PM 1.png"
          alt="Technology Support"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
}
