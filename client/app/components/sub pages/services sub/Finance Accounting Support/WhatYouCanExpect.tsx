export default function WhatYouCanExpect() {
  const points = [
    { id: '01', title: 'Organised Information', desc: 'Clear, structured records and accessible documentation.' },
    { id: '02', title: 'Consistent Workflows', desc: 'Repeatable, standardized processes across your business.' },
    { id: '03', title: 'Clear Accountability', desc: 'Transparent approvals and defined team responsibilities.' },
    { id: '04', title: 'Reliable Coordination', desc: 'Dependable day-to-day administrative support.' }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-900 text-center md:text-left">
        What You Can Expect
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((point, index) => (
          <div 
            key={index}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl sm:text-4xl font-black text-[#1150fb] group-hover:scale-110 transition-transform origin-left inline-block mb-4">
                {point.id}
              </span>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                {point.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
            <div className="w-8 h-1 bg-blue-100 group-hover:bg-[#1150fb] transition-colors duration-300 mt-6 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
