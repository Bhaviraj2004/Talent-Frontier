import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full flex flex-col md:flex-row h-auto md:h-[400px] overflow-hidden">
      <div className="w-full md:w-1/2 bg-[#1150fb] text-white p-12 md:p-20 flex flex-col justify-center relative">
        <div className="max-w-lg relative z-10 lg:ml-auto">
          <h2 className="text-3xl md:text-[36px] lg:text-[42px] font-bold mb-10 leading-tight pr-4">
            Make technology work more<br />effectively for your business.
          </h2>
          <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-sm text-[15px] font-semibold transition-colors w-fit">
            Discuss Your Technology Needs
          </button>
        </div>
        {/* Right side triangle detail based on image */}
        <div className="hidden md:block absolute -right-16 top-0 h-full w-32 bg-[#1150fb] transform -skew-x-[20deg] z-10"></div>
      </div>
      <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0 z-0">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/CTA Image.png"
          alt="Make technology work"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
