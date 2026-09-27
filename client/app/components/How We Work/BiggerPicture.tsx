export default function BiggerPicture() {
  const cards = [
    {
      title: "Quality Over Quantity",
      description:
        "We focus on relevant professionals rather than overwhelming you with profiles.",
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
    },
    {
      title: "Business Understanding",
      description:
        "We take the time to understand your organisation before identifying potential matches.",
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
      ),
    },
    {
      title: "Human Connection",
      description:
        "Skills and experience matter, but so do communication, aspirations and cultural alignment.",
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      ),
    },
    {
      title: "Clear Communication",
      description:
        "We keep the process straightforward and transparent at every stage.",
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
      ),
    },
    {
      title: "Long-Term Thinking",
      description:
        "We look beyond immediate requirements to help create professional relationships built for the future.",
      icon: (
        <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
            THE BIGGER PICTURE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1a2332] mb-4 tracking-tight">
            More Than a Profile
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            The right connection is about more than qualifications and experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-100 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 group cursor-pointer ${
                index >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
              } ${index === 3 ? "lg:col-start-1 lg:col-end-2" : ""}`}
            >
              <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a2332] mb-3 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
