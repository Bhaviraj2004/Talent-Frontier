import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] bg-[#02091a] overflow-hidden flex items-center font-sans py-14 md:py-0">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/contact page/ChatGPT Image Sep 2, 2026, 01_09_59 AM 1.png"
          alt="Start a Conversation" 
          fill
          className="object-cover opacity-90 object-[70%_center] md:object-right"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-[#02091a]/35 md:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02091a] via-[#02091a]/85 md:via-[#02091a]/80 to-transparent w-full md:w-[75%] lg:w-[65%]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col">
        <div className="max-w-[650px]">
          <p className="text-blue-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4">
            CONTACT TALENT FRONTIER
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
            <span className="italic font-serif font-light text-gray-200">Let's Start a</span><br />
            Conversation
          </h1>
          
          <p className="text-gray-200 text-[14px] md:text-[15px] max-w-[480px] mb-6 sm:mb-8 md:mb-12 leading-relaxed font-light drop-shadow-sm">
            Tell us about your business, current priorities and the support you require. Our team will help you identify the right next step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a 
              href="#contact-form"
              className="bg-[#1d4ed8] hover:bg-blue-600 active:scale-[0.98] text-white px-8 py-3.5 rounded-md font-semibold text-[13px] transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-center w-full sm:w-auto"
            >
              Send an Enquiry
            </a>
            <a 
              href="#contact-form"
              className="bg-transparent hover:bg-white/10 active:scale-[0.98] border border-[#1d4ed8] text-[#3b82f6] hover:text-[#60a5fa] px-8 py-3.5 rounded-md font-semibold text-[13px] transition-all duration-300 text-center w-full sm:w-auto hover:-translate-y-0.5"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
