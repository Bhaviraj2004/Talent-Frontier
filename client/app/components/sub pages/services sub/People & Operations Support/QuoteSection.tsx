export default function QuoteSection() {
  return (
    <section className="w-full bg-[#a3b8d7] py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-6">
        <span className="text-5xl md:text-6xl text-[#0a192f] font-serif leading-none mt-2">
          &ldquo;
        </span>
        <h3 className="text-2xl md:text-3xl font-medium text-[#0a192f] italic leading-relaxed">
          People processes require structure, communication and appropriate human oversight.
        </h3>
      </div>
    </section>
  );
}
