export default function AboutCTA() {
  return (
    <section className="bg-[#08154a] py-20 px-6 font-sans border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Let's Create the Right Support Structure for Your Business
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-3 rounded-md font-semibold text-sm transition-colors w-full sm:w-auto">
            Start a Conversation
          </button>
          <button className="bg-[#1c55d4] hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold text-sm transition-colors w-full sm:w-auto">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
