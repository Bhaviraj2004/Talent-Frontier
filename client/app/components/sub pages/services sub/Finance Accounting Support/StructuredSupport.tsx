import Image from "next/image";
import Link from "next/link";

export default function StructuredSupport() {
  return (
    <section className="w-full flex flex-col md:flex-row mt-6 md:mt-12">
      <div className="w-full md:w-1/2 bg-[#091535] text-white p-12 md:p-20 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Structured Support<br />for Your Finance<br />Processes
          </h2>
          <p className="text-gray-300 mb-10 max-w-sm text-sm leading-relaxed">
            Reliable assistance for routine finance activities,
            organised records and consistent workflows.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-[#1150fb] hover:bg-blue-700 text-white px-8 py-3 text-sm font-semibold transition-colors w-fit rounded-sm text-center"
          >
            Discuss Your Finance Support Needs
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">
        <Image
          src="/sub pages/Services/Finance & Accounting Support/ChatGPT Image Sep 2, 2026, 12_51_44 PM 1.png"
          alt="Structured Support"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
