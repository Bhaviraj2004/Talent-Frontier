import Image from "next/image";

export default function SolveRealProblems() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%] relative h-[300px] md:h-[350px]">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Intro Image.png"
          alt="Solve Real Business Problems"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
      <div className="w-full md:w-[55%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-6 text-[#091535] leading-tight max-w-md">
          Technology Should Solve<br />Real Business Problems
        </h2>
        <p className="text-gray-800 text-[15px] leading-relaxed max-w-md">
          We start by understanding your processes, systems and people.
          Then we design practical solutions aligned to your objectives.
        </p>
      </div>
    </section>
  );
}
