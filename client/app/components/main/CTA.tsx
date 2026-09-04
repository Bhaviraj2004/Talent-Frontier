import Image from 'next/image';

export default function CTA() {
  return (
    <section className="pb-24 pt-12 px-6 max-w-[1400px] mx-auto w-full font-sans">
      <div className="bg-[#1d4ed8] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl">
        <div className="z-10 flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready to Build Your Team?</h2>
          <p className="text-blue-100 mb-10 text-lg font-light max-w-md">We will help you find the right talent for your business.</p>
          <button className="bg-white text-blue-700 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-colors shadow-lg">
            Start a Conversation
          </button>
        </div>
        <div className="relative w-full md:w-1/2 aspect-[21/9] md:aspect-[16/7] rounded-xl overflow-hidden z-10 shadow-xl shadow-blue-900/50">
          <Image src="/main%20page/ctateam.png" alt="CTA Team" fill className="object-cover" />
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      </div>
    </section>
  );
}
