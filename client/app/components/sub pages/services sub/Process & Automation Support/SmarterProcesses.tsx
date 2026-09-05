import Image from "next/image";

export default function SmarterProcesses() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-[45%] bg-[#091535] text-white p-12 md:p-24 flex flex-col justify-center">
        <p className="text-[#1150fb] font-bold text-[11px] tracking-wider uppercase mb-6">
          PROCESS & AUTOMATION SUPPORT
        </p>
        <h2 className="text-3xl md:text-[42px] font-bold mb-6 leading-tight">
          Smarter Processes.<br />More Efficient Ways<br />of Working.
        </h2>
        <p className="text-gray-300 mb-10 max-w-sm text-[15px] leading-relaxed">
          Practical workflow improvement that reduces<br />
          repetition and strengthens consistency.
        </p>
        <button className="bg-[#1150fb] hover:bg-blue-700 text-white px-8 py-3 text-[13px] font-bold transition-colors w-fit rounded-sm">
          Discuss Your Process Requirements
        </button>
      </div>
      <div className="w-full md:w-[55%] relative min-h-[400px] md:min-h-0">
        <Image
          src="/sub pages/Services/Process & Automation Support/ChatGPT Image Sep 2, 2026, 03_28_10 PM 2.png"
          alt="Smarter Processes"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
