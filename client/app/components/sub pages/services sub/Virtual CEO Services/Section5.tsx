import React from 'react';
import Link from 'next/link';

const Section5 = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0a1128] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Find Leadership Aligned with Your Business
        </h2>
        <p className="text-blue-100 text-[15px] md:text-base mb-10 max-w-2xl mx-auto">
          Tell us about your organisation, current priorities and the type of leadership capability you are seeking.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-white text-[#08154a] hover:bg-gray-100 active:bg-blue-50 active:scale-[0.98] active:brightness-105 px-8 py-3 rounded-sm text-sm font-semibold transition-all shadow-md"
        >
          Discuss Executive Talent
        </Link>
      </div>
    </section>
  );
};

export default Section5;
