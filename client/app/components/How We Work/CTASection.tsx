import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full max-w-[95%] mx-auto mb-16 relative overflow-hidden rounded-3xl">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1128]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/90 to-[#0A1128]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center">
        <span className="inline-block bg-blue-600/20 border border-blue-400/30 text-blue-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
          LET&apos;S CONNECT
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white mb-5 tracking-tight leading-tight max-w-2xl">
          The Right Connection Starts{" "}
          <br className="hidden sm:block" />
          With a Conversation
        </h2>

        <p className="text-slate-300/80 text-sm md:text-base leading-relaxed max-w-xl mb-8 sm:mb-10">
          Tell us what your organisation is looking for, and let&apos;s explore how Talent Frontier can help you connect with the right professional.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 bg-[#2563eb] hover:bg-blue-700 active:bg-blue-800 active:scale-95 text-white font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
        >
          Connect With Us
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>
    </section>
  );
}
