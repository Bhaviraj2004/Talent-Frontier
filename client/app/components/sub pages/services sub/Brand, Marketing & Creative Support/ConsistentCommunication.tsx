import Image from "next/image";

export default function ConsistentCommunication() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-6 text-[#091535] leading-tight pr-4">
          Consistent Communication<br />Builds Stronger Brands
        </h2>
        <p className="text-gray-800 text-[15px] leading-relaxed mb-6">
          Your audience experiences your business across websites, social media,<br />
          presentations, emails and marketing campaigns.
        </p>
        <p className="text-gray-800 text-[15px] leading-relaxed">
          A consistent and organised approach helps maintain trust, improve brand<br />
          recognition and support business development.
        </p>
      </div>
      <div className="w-full md:w-[55%] relative h-[250px] md:h-[300px]">
        <Image
          src="/sub pages/Services/Brand, Marketing & Creative Support/Intro Image.png"
          alt="Consistent Communication"
          fill
          className="object-cover rounded-[32px]"
        />
      </div>
    </section>
  );
}
