import Image from 'next/image';

export default function SupportSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <h2 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[#1e293b] mb-6 leading-[1.2] tracking-tight">
            Support Across<br/>Your Business
          </h2>
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-medium">
            Growing businesses often need reliable support across multiple functions. Our team helps simplify essential business activities through structured processes, clear communication and flexible service delivery.
          </p>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-[55%] relative h-[300px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image 
            src="/Services page/Rectangle 2.png" 
            alt="Support team meeting" 
            fill
            className="object-cover"
          />
        </div>
        
      </div>
    </section>
  );
}
