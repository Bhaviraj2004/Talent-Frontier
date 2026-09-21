import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full bg-[#f8f9fc] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="w-full md:w-[55%] flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold mb-8 md:mb-10 text-[#091535] text-center md:text-left">
            How We Can Support You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Digital campaigns",
              "Social media management",
              "Content creation",
              "SEO activities",
              "Website content",
              "Graphic design",
              "Video content",
              "Email marketing",
              "Campaign coordination",
              "Paid advertising support",
              "Marketing reporting"
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-3 sm:p-4 rounded-xl flex gap-3 sm:gap-4 items-center shadow-sm border border-slate-200/80 hover:shadow-md hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
                <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-[#1150fb] text-sm sm:text-lg font-black flex items-center justify-center shrink-0 group-hover:bg-[#1150fb] group-hover:text-white transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-[#091535] text-[14px] sm:text-[15px] group-hover:text-blue-600 transition-colors leading-snug">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[45%] mt-8 md:mt-16">
          <div className="relative w-full aspect-[627/604] md:aspect-auto md:h-full min-h-[260px] sm:min-h-[380px] md:min-h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Hero Image (1).png"
              alt="Support Image"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
