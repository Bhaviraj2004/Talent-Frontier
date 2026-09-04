import Image from 'next/image';

export default function BuiltOnTrust() {
  return (
    <section className="w-full bg-white py-20 lg:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Text */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 lg:mb-20">
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#1e293b] leading-[1.15] tracking-tight md:max-w-[45%]">
            Built on Trust and Consistent Delivery
          </h2>
          <p className="text-gray-600 text-[14px] leading-relaxed md:max-w-[45%] font-medium md:mt-3">
            Strong business relationships are built through clear communication, reliable delivery and a genuine understanding of client needs.<br/><br/>
            Our clients' experiences reflect the standards we aim to maintain throughout every engagement.
          </p>
        </div>

        {/* Image */}
        <div className="w-full relative h-[350px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden mb-16 shadow-sm">
          <Image 
            src="/Testimonials page/Rectangle 20.png" 
            alt="Business meeting" 
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Divider */}
        <div className="flex items-center gap-4 lg:gap-8 w-full max-w-[1100px] mx-auto">
          <div className="h-[2px] flex-1 bg-slate-200"></div>
          <span className="text-[#2563eb] font-bold text-[14px] sm:text-[16px] lg:text-[18px] tracking-wide text-center shrink-0">
            Clear Communication. Reliable Delivery. Genuine Understanding
          </span>
          <div className="h-[2px] flex-1 bg-slate-200"></div>
        </div>

      </div>
    </section>
  );
}
