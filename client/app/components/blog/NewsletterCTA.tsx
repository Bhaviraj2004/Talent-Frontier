"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function NewsletterCTA() {
  return (
    <section className="w-full bg-[#08154a] py-12 md:py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Image & Title Group */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 w-full md:w-auto">
          {/* Envelope Image */}
          <div className="relative w-36 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 lg:w-56 lg:h-40 shrink-0">
            <Image 
              src="/Blog page/Untitled design (3) 1.png" 
              alt="Newsletter Subscription" 
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <div className="text-center md:text-left max-w-xs">
            <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold text-white leading-[1.2] tracking-tight">
              Business Insights<br />
              Delivered to Your Inbox
            </h2>
          </div>
        </div>

        {/* Form Group */}
        <div className="w-full md:max-w-md lg:max-w-lg flex flex-col justify-center text-center md:text-left">
          <p className="text-blue-100/85 text-[13px] leading-relaxed mb-6 font-medium">
            By subscribing, you agree to receive updates from Talent Frontier. You can unsubscribe at any time. Please review our Privacy Policy.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-md overflow-hidden shadow-sm mb-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              required
              placeholder="Business Email Address" 
              className="px-5 py-3.5 flex-1 outline-none text-[13px] border border-gray-200 sm:border-none rounded-md sm:rounded-none text-[#1e293b] bg-white min-w-0"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-500 active:bg-blue-400 active:scale-[0.98] text-white px-8 py-3.5 font-bold text-[13px] transition-all whitespace-nowrap rounded-md sm:rounded-none">
              Subscribe to insight
            </button>
          </form>
          <p className="text-blue-200/70 text-[12px] font-medium text-center md:text-left">
            You can unsubscribe at any time. Read our <Link href="/contact" className="text-blue-300 hover:text-white hover:underline font-bold">Privacy Policy</Link>
          </p>
        </div>
        
      </div>
    </section>
  );
}
