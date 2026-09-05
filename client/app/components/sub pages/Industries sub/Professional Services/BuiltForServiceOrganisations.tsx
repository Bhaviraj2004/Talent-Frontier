export default function BuiltForServiceOrganisations() {
  const items = [
    {
      title: "Consulting",
      icon: (
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* People / Consulting icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Advisory",
      icon: (
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Bar chart with trending upward arrow */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3v18h18M7 16v-4m5 4V8m5 8v-7M7 11l5-5 4 4 5-5" />
        </svg>
      ),
    },
    {
      title: "Creative Agencies",
      icon: (
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Lightbulb / Idea icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Legal Services",
      icon: (
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Scales of Justice */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3-1m12 0l3 1m0 0l-3 9a5.002 5.002 0 01-6.001 0M21 7l-3-1m0 0V4m0 2H6m6 0v14m-3 0h6" />
        </svg>
      ),
    },
    {
      title: "Engineering",
      icon: (
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Gear / Engineering icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Design Practices",
      icon: (
        <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {/* Compass / Drafting / Design tools */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v3m0 0l-5 13m5-13l5 13M9 13h6" />
          <circle cx="12" cy="6" r="1.5" strokeWidth="1.8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#0f172a] text-center mb-12 tracking-tight">
          Built for Service-Based Organisations
        </h2>

        {/* 6 Columns with Vertical Dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8 items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-4 lg:border-r lg:border-gray-200 last:lg:border-r-0"
            >
              <div className="mb-3 flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-[#0f172a]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
