import Image from 'next/image';
import Link from 'next/link';

export default function NewsletterCTA() {
  return (
    <section className="w-full bg-[#e6effb] py-12 md:py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Image & Title Group */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16 w-full md:w-auto">
          {/* Envelope Image */}
          <div className="relative w-40 h-28 md:w-48 md:h-32 lg:w-56 lg:h-40 shrink-0">
            <Image 
              src="/Blog page/Untitled design (3) 1.png" 
              alt="Newsletter Subscription" 
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center md:text-left max-w-xs">
            <h2 className="text-[22px] md:text-[24px] lg:text-[28px] font-bold text-[#1e293b] leading-[1.2] tracking-tight">
              Business Insights<br />
              Delivered to Your Inbox
            </h2>
          </div>
        </div>

        {/* Form Group */}
        <div className="w-full md:max-w-md lg:max-w-lg flex flex-col justify-center text-center md:text-left">
          <p className="text-[#475569] text-[13px] leading-relaxed mb-6 font-medium">
            By subscribing, you agree to receive updates from Talent Frontier. You can unsubscribe at any time. Please review our Privacy Policy.
          </p>
          <div className="flex flex-col sm:flex-row gap-0 rounded-md overflow-hidden shadow-sm mb-4">
            <input 
              type="email" 
              placeholder="Business Email Address" 
              className="px-5 py-3.5 flex-1 outline-none text-[13px] border-none text-[#1e293b] bg-white min-w-[200px]"
            />
            <button className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-3.5 font-bold text-[13px] transition-colors whitespace-nowrap">
              Subscribe to insight
            </button>
          </div>
          <p className="text-gray-500 text-[12px] font-medium text-left">
            You can unsubscribe at any time. Read our <Link href="#" className="text-[#3b82f6] hover:underline font-bold">Privacy Policy</Link>
          </p>
        </div>
        
      </div>
    </section>
  );
}
