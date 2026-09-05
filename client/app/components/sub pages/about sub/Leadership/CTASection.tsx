export default function CTASection() {
  return (
    <section className="w-full px-6 py-12 mb-20">
      <div className="max-w-6xl mx-auto bg-[#c5d3eb] rounded-[32px] py-16 px-6 md:px-12 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
          Work With Our Team
        </h2>
        <p className="text-[#0a192f] text-sm md:text-base max-w-lg mb-8 opacity-80">
          Let's discuss how the right professional support can help your business operate efficiently, overcome challenges and grow with confidence.
        </p>
        <button className="bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors text-sm">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
