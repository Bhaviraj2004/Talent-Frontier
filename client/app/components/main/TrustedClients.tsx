export default function TrustedClients() {
  const clients = [
    { name: "NORTHRIDGE", subtitle: "SOLUTIONS" },
    { name: "VERIDIAN", subtitle: "PARTNERS" },
    { name: "LUMENIX", subtitle: "TECHNOLOGIES" },
    { name: "ALTURA", subtitle: "ADVISORS" },
    { name: "NOVENTIS", subtitle: "HEALTH" },
    { name: "VERITAS", subtitle: "FINANCIAL" },
    { name: "COVALENT", subtitle: "GLOBAL" },
    { name: "PEREGRINE", subtitle: "CAPITAL" }
  ];

  return (
    <section className="w-full bg-white py-20 border-t border-gray-100 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">
          OUR TRUSTED CLIENTS
        </p>
        <h2 className="text-3xl font-bold text-[#0f172a] mb-12">
          Trusted by Businesses Worldwide
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-[3px] flex items-center justify-center
                border-blue-500 relative">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <div className="text-left leading-none">
                <span className="block text-sm font-black tracking-tight text-[#0f172a]">{client.name}</span>
                <span className="block text-[8px] tracking-[0.2em] text-blue-500 mt-1">{client.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
