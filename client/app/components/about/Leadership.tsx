export default function Leadership() {
  const leaders = [
    { name: "James Carter", role: "Managing Director" },
    { name: "Sophie Nguyen", role: "Director" },
    { name: "Michael Thompson", role: "Director" }
  ];

  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto w-full font-sans text-center">
      <p className="text-[#2563eb] text-xs font-bold tracking-widest uppercase mb-4">Leadership</p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-16 tracking-tight">Leadership With a Clear Recruitment Vision</h2>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {leaders.map((leader, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center p-4 w-full md:w-1/3 hover:-translate-y-1 transition-transform">
            <div className="w-20 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative mr-5 border border-gray-200">
              {/* Placeholder for portraits */}
              <div className="absolute inset-0 bg-gray-200 flex items-end justify-center">
                <svg className="w-16 h-16 text-gray-400 -mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.315 0-10 1.672-10 5v1h20v-1c0-3.328-6.685-5-10-5z"/></svg>
              </div>
            </div>
            <div className="text-left flex flex-col justify-center">
              <h3 className="font-bold text-[#0f172a] text-[15px] mb-0.5">{leader.name}</h3>
              <p className="text-[#2563eb] text-xs font-bold tracking-wide">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
