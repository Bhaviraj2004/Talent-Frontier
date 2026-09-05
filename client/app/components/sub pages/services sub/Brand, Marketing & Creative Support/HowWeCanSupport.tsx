import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full bg-[#f8f9fc] py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-[55%] flex flex-col">
          <h2 className="text-3xl md:text-[36px] font-bold mb-10 text-[#091535]">
            How We Can Support You
          </h2>
          <div className="flex flex-col gap-5">
            {/* Cards */}
            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">01</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Brand Communication</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Assistance with maintaining consistent messaging, visual standards and brand presentation.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">02</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Graphic Design</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Creative support for digital graphics, presentations, brochures, reports and approved marketing materials.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">03</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Social Media Content</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Planning and creating approved posts, captions, campaign material and content schedules.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">04</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Website Content Support</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Assistance with service-page content, blog formatting, landing pages and website updates.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">05</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Email Marketing Support</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Support for approved email layouts, newsletters, campaign setup and audience organisation.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">06</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Content Coordination</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Maintaining content calendars, approvals, assets and publication schedules.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-md flex gap-6 items-start shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100">
              <span className="text-[#1150fb] text-2xl font-semibold">07</span>
              <div>
                <h3 className="font-bold text-[#091535] text-[16px] mb-2">Campaign Support</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed pr-4">Assistance with campaign preparation, creative production, implementation and reporting organisation.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[45%] mt-12 md:mt-24">
          <div className="relative w-full h-[600px] md:h-full min-h-[600px]">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Hero Image (1).png"
              alt="Support Image"
              fill
              className="object-cover rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
