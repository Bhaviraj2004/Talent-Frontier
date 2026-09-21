import Image from 'next/image';
import Link from 'next/link';

export default function ReliableSupport() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch">
      <div className="w-full md:w-5/12 flex flex-col justify-center px-6 md:pl-24 md:pr-12 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight mb-6">
          Build Reliable Administrative<br />Support Around Your Business
        </h2>
        <div className="text-gray-600 text-sm md:text-base max-w-lg mb-8 leading-relaxed space-y-4">
          <p>
            The right administrative professional can help keep your team organised, responsive and focused on higher-value priorities.
          </p>
          <p>
            Talent Frontier helps businesses identify and connect with administrative professionals based on their operational requirements.
          </p>
        </div>
      </div>
      <div className="w-full md:w-7/12 relative aspect-[777/451] md:aspect-auto min-h-[240px] sm:min-h-[320px] md:min-h-[600px] group overflow-hidden">
        {/* Diagonal cut effect for the image container only on desktop */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden [clip-path:none] md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]" 
        >
          <Image
            src="/sub pages/Services/Business Support Services/Group 5.png"
            alt="Reliable Support"
            fill
            className="object-cover object-center md:object-left group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
