import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24">
      <div className="w-full bg-[#1150fb] text-white rounded-[32px] flex flex-col md:flex-row overflow-hidden h-auto md:h-[400px]">
        <div className="w-full md:w-[55%] p-12 md:p-16 flex flex-col justify-center relative z-10">
          <h2 className="text-3xl md:text-[34px] font-bold mb-6 leading-tight max-w-sm">
            Ready to improve the way<br />your business works?
          </h2>
          <p className="mb-10 text-blue-100 text-[14px]">
            Tell us where delays or repetition are holding your team back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-[#1150fb] hover:bg-gray-100 px-6 py-3 rounded-sm text-[13px] font-bold transition-colors">
              Discuss Your Process Requirements
            </button>
            <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-sm text-[13px] font-bold transition-colors">
              Talk to Our Team
            </button>
          </div>
        </div>
        <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-0 z-0 bg-black">
          {/* Curved cutout overlay */}
          <div className="absolute top-[-10%] -left-16 w-32 h-[120%] bg-[#1150fb] rounded-[50%] z-10 hidden md:block"></div>
          <Image
            src="/sub pages/Services/Process & Automation Support/Editable Shape (7).png"
            alt="Ready to improve"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
