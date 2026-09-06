"use client";

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does your recruitment process work?",
      a: "We begin by understanding your role requirements, source and screen candidates through structured assessments, and present a curated shortlist for interviews and selection."
    },
    {
      q: "What types of roles can you help us recruit?",
      a: "We recruit across Technology, Finance & Accounting, Healthcare, Engineering, Construction, Sales & Marketing, Administration, Customer Support, and Professional Services."
    },
    {
      q: "How are candidates screened?",
      a: "Our team conducts in-depth CV evaluations, skills verifications, background checks, and structured preliminary interviews to ensure role and culture fit."
    },
    {
      q: "How quickly can you provide shortlisted profiles?",
      a: "Typically, we present an initial shortlist of vetted candidates within 3 to 5 business days, depending on role complexity."
    },
    {
      q: "How do we get started?",
      a: "Simply reach out via our contact page or schedule a consultation. We'll discuss your requirements and design a tailored recruitment strategy."
    },
    {
      q: "What happens after we select a candidate?",
      a: "We assist with offer coordination, onboarding preparation, and conduct regular follow-ups to ensure a smooth transition."
    }
  ];

  const toggleFAQ = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 md:py-24 px-6 max-w-[1000px] mx-auto w-full font-sans">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-10 md:mb-14 tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div 
              key={i} 
              onClick={() => toggleFAQ(i)}
              className="bg-[#f0f5fc] rounded-xl p-5 flex flex-col cursor-pointer hover:bg-[#e1ecf9] transition-all border border-blue-50/80 shadow-sm"
            >
              <div className="flex justify-between items-center gap-3">
                <span className="font-semibold text-gray-800 text-sm sm:text-[15px] leading-snug">{faq.q}</span>
                <span className={`text-blue-600 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
              {isOpen && (
                <p className="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-blue-100/60 pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
