import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2 bg-[#1150fb] text-white p-12 md:p-16 flex flex-col justify-center rounded-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Bring greater structure to your<br />financial administration.
        </h2>
        <p className="mb-12 text-blue-100 text-[15px]">
          Tell us about your finance-process requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-[#1150fb] hover:bg-gray-100 px-8 py-3 rounded-sm text-sm font-semibold transition-colors">
            Discuss Your Finance Support Needs
          </button>
          <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-sm text-sm font-semibold transition-colors">
            Talk to Our Team
          </button>
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
