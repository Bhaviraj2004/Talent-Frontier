import Image from 'next/image';

export default function ReliableSupport() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch">
      <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:pl-24 md:pr-12 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight mb-6">
          Reliable Support for <br /> Everyday Business <br /> Operations
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
          Practical administrative and operational support designed to help your team stay organised, responsive and focused on core business priorities.
        </p>
        <div>
          <button className="bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-sm">
            Discuss Your Support Needs
          </button>
        </div>
      </div>
      <div className="w-full md:w-7/12 relative min-h-[400px] md:min-h-[600px]">
        {/* Diagonal cut effect for the image container */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden" 
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <Image
            src="/sub pages/Services/Business Support Services/Group 5.png"
            alt="Reliable Support"
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
