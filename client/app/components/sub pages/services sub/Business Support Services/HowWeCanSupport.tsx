import Image from 'next/image';

export default function HowWeCanSupport() {
  const supports = [
    'Email and calendar coordination',
    'Meeting scheduling',
    'Document preparation',
    'Formatting business documents',
    'Data entry',
    'Database maintenance',
    'CRM updates',
    'Customer communication',
    'Appointment coordination',
    'Administrative reporting',
    'File and record organisation',
    'General operational assistance'
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] text-center mb-4 sm:mb-6">
          What These Professionals Can Support
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl mb-12 sm:mb-16">
          Depending on the position and experience required, responsibilities may include:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {supports.map((support, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group flex items-center gap-3 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0047FF] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#0047FF] group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-sm font-bold text-[#0a192f] group-hover:text-blue-600 transition-colors leading-snug">
                {support}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
