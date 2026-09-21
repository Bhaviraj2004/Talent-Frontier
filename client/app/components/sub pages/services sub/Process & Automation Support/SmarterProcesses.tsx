import Image from "next/image";
import Link from "next/link";

export default function SmarterProcesses() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-[45%] bg-[#091535] text-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-3xl md:text-[42px] font-bold mb-6 leading-tight">
          Find Professionals Who Can Make Your Systems Work Better Together
        </h2>
        <p className="text-gray-300 mb-4 max-w-sm text-[15px] leading-relaxed">
          Growing businesses often accumulate disconnected systems and repetitive processes.
        </p>
        <p className="text-gray-300 mb-10 max-w-sm text-[15px] leading-relaxed">
          The right automation or business systems professional can help identify opportunities to simplify workflows and improve how information moves across the organisation.
        </p>
      </div>
      <div className="w-full md:w-[55%] relative aspect-[1440/588] md:aspect-auto min-h-[220px] md:min-h-0 group overflow-hidden">
        <Image
          src="/sub pages/Services/Process & Automation Support/ChatGPT Image Sep 2, 2026, 03_28_10 PM 2.png"
          alt="Smarter Processes"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
