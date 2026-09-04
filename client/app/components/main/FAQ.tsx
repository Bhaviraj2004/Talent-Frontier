export default function FAQ() {
  const faqs = [
    "How does your recruitment process work?",
    "What types of roles can you help us recruit?",
    "How are candidates screened?",
    "How quickly can you provide shortlisted profiles?",
    "How do we get started?",
    "What happens after we select a candidate?"
  ];
  return (
    <section className="py-24 px-6 max-w-[1000px] mx-auto w-full font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-12 tracking-tight">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[#f0f5fc] rounded-lg p-5 flex justify-between items-center cursor-pointer hover:bg-[#e1ecf9] transition-colors border border-blue-50">
            <span className="font-semibold text-gray-700 text-sm">{faq}</span>
            <span className="text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
