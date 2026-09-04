export default function AboutCTA() {
  return (
    <section className="bg-[#08154a] py-16 px-6 font-sans flex flex-col items-center justify-center text-center mt-12 border-t border-blue-900/30">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
        Let's Talk About Your Hiring Needs
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button className="bg-white text-[#08154a] px-10 py-3.5 rounded-md font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg">
          Start a Conversation
        </button>
        <button className="bg-[#2563eb] text-white px-10 py-3.5 rounded-md font-bold text-sm hover:bg-blue-600 transition-colors shadow-lg">
          Hire Talent
        </button>
      </div>
    </section>
  );
}
