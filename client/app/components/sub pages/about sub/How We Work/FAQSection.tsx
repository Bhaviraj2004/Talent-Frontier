"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the process begin?",
      answer:
        "Everything starts with a conversation. We learn about your organisation, objectives and the type of professional you are looking to connect with.",
    },
    {
      question: "How do you identify suitable professionals?",
      answer:
        "We combine our professional network, market knowledge and targeted search strategies to identify people whose experience and capabilities align with your requirements.",
    },
    {
      question: "How do you assess potential matches?",
      answer:
        "We consider relevant experience, professional capabilities, communication, expectations and overall alignment with the opportunity.",
    },
    {
      question: "Will we meet the professionals?",
      answer:
        "Yes. Once suitable profiles have been identified, we facilitate introductions so you can have direct conversations and make your own assessment.",
    },
    {
      question: "Who makes the final decision?",
      answer:
        "You do. Talent Frontier provides the expertise and relevant connections, while your organisation remains in control of the final decision.",
    },
    {
      question: "Can you support different industries and roles?",
      answer:
        "Our approach can be adapted to different industries, business sizes and professional requirements. We begin by understanding your specific needs and then tailor our approach accordingly.",
    },
    {
      question: "What happens after we decide to move forward?",
      answer:
        "We help coordinate the next steps and support a smooth transition, maintaining clear communication between all parties.",
    },
    {
      question: "Can we speak with Talent Frontier before proceeding?",
      answer:
        "Absolutely. We welcome an initial conversation to understand your requirements and discuss how Talent Frontier can support your organisation.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
            COMMON QUESTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2332] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/40 shadow-md"
                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? "text-[#2563eb]" : "text-[#1a2332] group-hover:text-[#2563eb]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#2563eb] text-white rotate-180"
                        : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-[#2563eb]"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
