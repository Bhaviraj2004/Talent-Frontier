import Image from "next/image";

export default function PracticalAI() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-10 text-[#091535]">
          Practical AI Applications
        </h2>
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
          <div className="flex items-center gap-4">
            <span className="text-[#1150fb] font-semibold text-sm">01</span>
            <span className="text-gray-800 text-[14px] font-medium">Drafting</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1150fb] font-semibold text-sm">04</span>
            <span className="text-gray-800 text-[14px] font-medium">Knowledge search</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1150fb] font-semibold text-sm">02</span>
            <span className="text-gray-800 text-[14px] font-medium">Summarising</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1150fb] font-semibold text-sm">05</span>
            <span className="text-gray-800 text-[14px] font-medium">Enquiry classification</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1150fb] font-semibold text-sm">03</span>
            <span className="text-gray-800 text-[14px] font-medium">Data organisation</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#1150fb] font-semibold text-sm">06</span>
            <span className="text-gray-800 text-[14px] font-medium">Reporting preparation</span>
          </div>
        </div>
        <p className="text-gray-600 text-[13px]">
          Important work remains human reviewed.
        </p>
      </div>
      <div className="w-full md:w-[55%] relative h-[300px] md:h-[400px]">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/AI Image.png"
          alt="Practical AI Applications"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
}
