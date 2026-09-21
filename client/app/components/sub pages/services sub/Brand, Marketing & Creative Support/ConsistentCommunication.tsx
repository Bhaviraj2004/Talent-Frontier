import Image from "next/image";

export default function ConsistentCommunication() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-[34px] font-bold mb-6 text-[#091535] leading-tight pr-4">
          Professionals We Can Help You Find
        </h2>
        <ul className="text-gray-800 text-[15px] leading-relaxed mb-6 list-disc pl-5 space-y-2">
          <li>Digital Marketing Specialists</li>
          <li>Marketing Coordinators</li>
          <li>Social Media Specialists</li>
          <li>SEO Specialists</li>
          <li>Content Writers</li>
          <li>Copywriters</li>
          <li>Graphic Designers</li>
          <li>Video Editors</li>
          <li>Performance Marketing Specialists</li>
          <li>Email Marketing Specialists</li>
          <li>Marketing Automation Professionals</li>
        </ul>
      </div>
      <div className="w-full md:w-[55%] relative aspect-[736/300] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
        <Image
          src="/sub pages/Services/Brand, Marketing & Creative Support/Intro Image.png"
          alt="Consistent Communication"
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
