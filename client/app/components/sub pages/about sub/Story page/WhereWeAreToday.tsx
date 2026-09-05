import Image from "next/image";

export default function WhereWeAreToday() {
  return (
    <section className="w-full bg-[#f4f7fb] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-8">
            Where We Are Today
          </h2>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-6 max-w-lg">
            <p>
              We're proud to partner with businesses across Australia, 
              providing local expertise and personalised support that 
              makes a real difference.
            </p>
            <p>
              With a strong national network and global reach, we 
              connect you with the talent you need to grow, adapt 
              and lead in a changing world.
            </p>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <Image
            src="/sub pages/About/Story page/Rectangle (2).png"
            alt="City skyline"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
