import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24">
      <div className="w-full bg-[#08154a] text-white rounded-[32px] flex flex-col md:flex-row overflow-hidden h-auto md:h-[400px] shadow-xl">
        <div className="w-full md:w-[55%] p-12 md:p-16 flex flex-col justify-center relative z-10">
          <h2 className="text-3xl md:text-[34px] font-bold mb-6 leading-tight max-w-sm">
            Turn Manual Processes into Smarter Workflows
          </h2>
          <p className="mb-10 text-blue-100 text-[14px]">
            Tell us which systems, platforms or processes your organisation needs help with.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact"
              className="inline-block bg-white text-[#08154a] hover:bg-gray-100 active:bg-blue-50 active:scale-[0.98] active:brightness-105 px-6 py-3 rounded-sm text-[13px] font-bold transition-all text-center shadow-md w-fit"
            >
              Find Automation Talent
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[45%] relative aspect-[632/235] md:aspect-auto min-h-[200px] md:min-h-0 z-0 bg-black group overflow-hidden">
          {/* Curved cutout overlay */}
          <div className="absolute top-[-10%] -left-16 w-32 h-[120%] bg-[#08154a] rounded-[50%] z-10 hidden md:block"></div>
          <Image
            src="/sub pages/Services/Process & Automation Support/Editable Shape (7).png"
            alt="Ready to improve"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
