import Image from "next/image";

export default function SecurityAndResponsibleUse() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-[35%] relative h-[250px] md:h-[300px]">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Security Image.png"
          alt="Security and Responsible Use"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="w-full md:w-[65%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-12 text-[#091535]">
          Security and Responsible Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
          <div>
            <span className="text-[#1150fb] font-semibold text-lg mb-3 block">01</span>
            <span className="text-gray-800 text-[14px] font-medium">Access control</span>
          </div>
          <div>
            <span className="text-[#1150fb] font-semibold text-lg mb-3 block">02</span>
            <span className="text-gray-800 text-[14px] font-medium">Information<br/>security</span>
          </div>
          <div>
            <span className="text-[#1150fb] font-semibold text-lg mb-3 block">03</span>
            <span className="text-gray-800 text-[14px] font-medium">Privacy obligations</span>
          </div>
          <div>
            <span className="text-[#1150fb] font-semibold text-lg mb-3 block">04</span>
            <span className="text-gray-800 text-[14px] font-medium">Data retention</span>
          </div>
          <div>
            <span className="text-[#1150fb] font-semibold text-lg mb-3 block">05</span>
            <span className="text-gray-800 text-[14px] font-medium">Approval<br/>processes</span>
          </div>
          <div>
            <span className="text-[#1150fb] font-semibold text-lg mb-3 block">06</span>
            <span className="text-gray-800 text-[14px] font-medium">Acceptable use</span>
          </div>
        </div>
      </div>
    </section>
  );
}
