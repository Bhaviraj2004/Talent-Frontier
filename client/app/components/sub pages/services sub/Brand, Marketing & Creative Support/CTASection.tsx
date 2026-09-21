import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-[#08154a] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Build the Marketing Capability You Need
        </h2>
        <p className="mb-10 text-blue-100 text-[15px] leading-relaxed max-w-2xl">
          Instead of trying to fit every marketing requirement into one position, tell us the capabilities and outcomes your business needs.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-white text-[#08154a] hover:bg-gray-100 active:bg-blue-50 active:scale-[0.98] active:brightness-105 px-8 py-3 rounded-sm text-sm font-semibold transition-all shadow-md"
        >
          Find Marketing Talent
        </Link>
      </div>
    </section>
  );
}
