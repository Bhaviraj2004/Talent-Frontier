import Image from 'next/image';

export default function PracticalSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-5/12 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Practical Support <br /> for Your People and <br /> Operations
          </h2>
          <a href="#" className="text-[#0047FF] font-medium text-sm hover:underline">
            Discuss Your People and Operations Needs
          </a>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Structured assistance that helps your organisation coordinate people-related activities, maintain documentation and support everyday operations.
          </p>
        </div>
        <div className="w-full md:w-7/12 relative h-[350px] md:h-[500px]">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-sm">
            <Image
              src="/sub pages/Services/People & Operations Support/Hero Image — replace with supplied photo.png"
              alt="Practical Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
