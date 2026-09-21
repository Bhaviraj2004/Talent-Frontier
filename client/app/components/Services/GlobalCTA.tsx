import React from 'react';
import Link from 'next/link';

export default function GlobalCTA() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#091535]">
          Looking for the Right Person for Your Team?
        </h2>
        <p className="text-gray-600 text-[15px] md:text-base mb-4 max-w-2xl mx-auto">
          Tell us what position you need, the experience you are looking for and what you need the professional to achieve.
        </p>
        <p className="text-gray-600 text-[15px] md:text-base mb-10 max-w-2xl mx-auto">
          Talent Frontier can help you identify and screen professionals aligned with your requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact"
            className="inline-block bg-[#1150fb] text-white hover:bg-blue-700 active:scale-[0.98] px-8 py-3 rounded-sm text-sm font-semibold transition-all shadow-md"
          >
            Hire Talent
          </Link>
          <Link 
            href="/contact"
            className="inline-block bg-white text-[#091535] border border-gray-300 hover:bg-gray-50 active:scale-[0.98] px-8 py-3 rounded-sm text-sm font-semibold transition-all shadow-sm"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
