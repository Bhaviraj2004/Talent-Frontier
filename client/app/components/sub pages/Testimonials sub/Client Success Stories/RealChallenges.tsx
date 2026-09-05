import Image from "next/image";

export default function RealChallenges() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
      {/* Left Image Area */}
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="/sub pages/Testimonials/Client Success Stories/Rectangle 130.png"
          alt="Team analyzing challenges"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content Area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center max-w-md ml-auto mr-auto md:ml-8 md:mr-0">
        <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
          CLIENT SUCCESS STORIES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight">
          Real Challenges. <br />
          Practical Support. <br />
          Meaningful Outcomes.
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
          See how businesses use structured support to improve <br/>
          processes, strengthen capacity and move forward.
        </p>
        <div>
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300 text-sm">
             Explore Success Stories
           </button>
        </div>
      </div>
    </section>
  );
}
