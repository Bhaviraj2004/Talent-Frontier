import Image from "next/image";

export default function BusinessSupportStarts() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
          OUR APPROACH
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6 leading-tight">
          Business Support Starts <br className="hidden md:block" />
          With Understanding <br className="hidden md:block" />
          Your Business.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
          Every successful partnership begins with understanding your 
          business, its challenges and its goals. We take the time to 
          deliver the right support.
        </p>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300 text-sm">
            Tell Us What You Need
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px]">
        <Image
          src="/sub pages/About/Our Approach/Hero Image — replace with source photo.png"
          alt="Team discussing at a table"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
