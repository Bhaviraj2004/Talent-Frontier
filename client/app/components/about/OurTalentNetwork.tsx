import Image from 'next/image';

export default function OurTalentNetwork() {
  return (
    <section className="px-6 max-w-[1400px] mx-auto w-full font-sans my-24">
      <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden">
        {/* Left: Image Grid */}
        <div className="lg:w-[55%] relative min-h-[400px] lg:min-h-[500px]">
          <Image src="/about%20page/talentpotraits.png" alt="Talent Network Portraits" fill className="object-cover" />
        </div>
        {/* Right: Dark Navy Box */}
        <div className="lg:w-[45%] bg-[#08154a] p-12 md:p-16 flex flex-col justify-center">
          <p className="text-[#93c5fd] text-xs font-bold tracking-widest uppercase mb-5">Our Talent Network</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Access a Broader<br/>Talent Network
          </h2>
          <p className="text-blue-100/70 text-base leading-relaxed font-light max-w-md">
            We maintain an active network of skilled professionals across key industries and functions—ready to help you stay competitive and grow with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
