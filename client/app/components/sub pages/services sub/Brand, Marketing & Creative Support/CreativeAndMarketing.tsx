import Image from "next/image";

export default function CreativeAndMarketing() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 text-[#091535] leading-tight">
          Creative and<br />marketing Support<br />That Strengthens<br />your Brand
        </h2>
        <p className="text-gray-800 mb-10 max-w-sm text-[15px] leading-relaxed">
          Integrated support for brand communication, digital<br />
          marketing and creative production aligned with your<br />
          business objectives.
        </p>
        <button className="bg-[#1150fb] hover:bg-blue-700 text-white px-8 py-3 text-sm font-semibold transition-colors w-fit rounded-sm">
          Discuss Your Marketing Needs
        </button>
      </div>
      <div className="w-full md:w-[55%] relative h-[400px] md:h-[480px]">
        <Image
          src="/sub pages/Services/Brand, Marketing & Creative Support/ChatGPT Image Sep 2, 2026, 02_48_59 PM 1.png"
          alt="Creative and marketing Support"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
}
