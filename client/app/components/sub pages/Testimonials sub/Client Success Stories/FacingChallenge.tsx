import Image from "next/image";
import Link from "next/link";

export default function FacingChallenge() {
  return (
    <section className="w-full bg-[#08154a] text-white flex flex-col md:flex-row min-h-0 md:min-h-[400px]">
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-lg mx-auto md:ml-auto md:mr-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Facing a Similar Business Challenge?
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-6 sm:mb-10">
            <Link href="/contact" className="underline font-bold hover:text-gray-200 transition">Tell us</Link> what is creating pressure, delays or unnecessary workload.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#08154a] font-bold py-3 px-8 rounded-sm text-sm hover:bg-gray-100 transition duration-300 self-start text-center"
          >
            Discuss Your Business Needs
          </Link>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full md:w-1/2 relative min-h-[240px] sm:min-h-[300px] md:min-h-[auto] p-4 sm:p-6 md:p-10 flex items-center justify-center">
         <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden">
            <Image
              src="/sub pages/Testimonials/Client Success Stories/Rectangle 20.png"
              alt="Colleagues discussing"
              fill
              className="object-cover"
            />
         </div>
      </div>
    </section>
  );
}
