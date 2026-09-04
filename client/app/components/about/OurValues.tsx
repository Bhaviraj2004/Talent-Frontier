export default function OurValues() {
  const values = [
    { title: "Integrity", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Quality", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Transparency", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { title: "Responsiveness", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Long-Term Partnership", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
  ];

  return (
    <section className="bg-[#f4f7fb] py-20 px-6 w-full font-sans border-y border-blue-50">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-[#2563eb] text-[11px] font-bold tracking-[0.2em] uppercase mb-12">Our Values</p>
        
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
          {values.map((v, i) => (
            <div key={i} className="flex flex-col items-center group w-24">
              <div className="mb-5 text-[#2563eb] group-hover:-translate-y-2 transition-transform duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={v.icon}></path>
                </svg>
              </div>
              <span className="font-bold text-[#0f172a] text-[11px] tracking-wide text-center leading-snug">{v.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
