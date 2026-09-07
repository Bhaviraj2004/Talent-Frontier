import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2 bg-[#08154a] text-white p-12 md:p-16 flex flex-col justify-center rounded-sm shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Bring greater structure to your<br />financial administration.
        </h2>
        <p className="mb-12 text-blue-100 text-[15px]">
          Tell us about your finance-process requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#08154a] hover:bg-gray-100 active:bg-blue-50 active:scale-[0.98] active:brightness-105 px-8 py-3 rounded-sm text-sm font-semibold transition-all text-center shadow-md"
          >
            Discuss Your Finance Support Needs
          </Link>
          <Link 
            href="/contact"
            className="inline-block border border-white hover:bg-white/10 active:bg-white/20 active:scale-[0.98] text-white px-8 py-3 rounded-sm text-sm font-semibold transition-all text-center"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-0 rounded-sm overflow-hidden">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/Final CTA Image — Consultation meeting.png"
          alt="Consultation meeting"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
