import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 mb-12 sm:mb-20">
      <div className="max-w-6xl mx-auto bg-[#08154a] rounded-2xl sm:rounded-[32px] py-10 sm:py-16 px-6 md:px-12 text-center flex flex-col items-center shadow-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Work With Our Team
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-lg mb-8">
          Let's discuss how the right professional support can help your business operate efficiently, overcome challenges and grow with confidence.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-white hover:bg-slate-100 active:bg-blue-50 text-[#08154a] font-bold py-3 px-8 rounded-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 text-sm text-center shadow-md"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
