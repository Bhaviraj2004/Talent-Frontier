import Image from "next/image";

export default function DifferentNeeds() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
      {/* Left Text Area */}
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
          Different Needs. <br />
          One Consistent <br />
          Commitment.
        </h2>
        <div className="w-12 h-0.5 bg-[#1a2332] mb-6"></div>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Understand the requirement. <br />
          Communicate clearly. Deliver <br />
          reliable support.
        </p>
      </div>

      {/* Right Image Area */}
      <div className="w-full md:w-2/3 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden">
        <Image
          src="/sub pages/Testimonials/Rectangle 98.png"
          alt="Team meeting"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
