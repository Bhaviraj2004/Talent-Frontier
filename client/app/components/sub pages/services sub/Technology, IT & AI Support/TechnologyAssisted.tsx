import Image from "next/image";

export default function TechnologyAssisted() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-[45%] bg-[#091535] text-white p-12 md:p-24 flex flex-col justify-center">
        <h2 className="text-3xl md:text-[42px] font-bold mb-12 leading-tight">
          Technology-Assisted.<br />Human-Led.
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[#1150fb] font-semibold text-lg w-6">01</span>
            <span className="text-gray-200 text-[15px]">Business context</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#1150fb] font-semibold text-lg w-6">02</span>
            <span className="text-gray-200 text-[15px]">Professional judgement</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#1150fb] font-semibold text-lg w-6">03</span>
            <span className="text-gray-200 text-[15px]">Quality review</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#1150fb] font-semibold text-lg w-6">04</span>
            <span className="text-gray-200 text-[15px]">Important decisions</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[55%] relative aspect-[765/305] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Human Image.png"
          alt="Human Led"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
