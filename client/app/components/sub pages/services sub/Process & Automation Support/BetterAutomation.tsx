import Image from "next/image";

export default function BetterAutomation() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16 border-b border-gray-200">
      <div className="w-full md:w-[40%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-6 text-[#091535] leading-tight max-w-sm">
          Better Automation<br />Starts With a<br />Better Process
        </h2>
        <p className="text-gray-600 text-[14px] leading-relaxed max-w-xs">
          We understand the current workflow first.<br />
          Then we simplify it before introducing automation.
        </p>
      </div>
      <div className="w-full md:w-[60%] relative h-[250px] md:h-[300px]">
        <Image
          src="/sub pages/Services/Process & Automation Support/Editable Shape (1).png"
          alt="Better Automation"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
}
