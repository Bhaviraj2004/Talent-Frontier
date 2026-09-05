"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  "All Feedback",
  "Business Support",
  "People & Operations",
  "Finance & Accounting",
  "Technology & AI",
  "Marketing & Creative",
  "Process & Automation",
];

const gridTestimonials = [
  {
    id: 1,
    image: "/sub pages/Testimonials/Rectangle 101.png",
    category: "Business Support — Melbourne",
    quote: "\"Clear communication made a real difference.\"",
    footer: "Client feedback",
  },
  {
    id: 2,
    image: "/sub pages/Testimonials/Rectangle 102.png",
    category: "Finance & Accounting — Sydney",
    quote: "\"Reliable delivery and practical support.\"",
    footer: "Client feedback",
  },
  {
    id: 3,
    image: "/sub pages/Testimonials/Rectangle 103.png",
    category: "Technology & Digital — Brisbane",
    quote: "\"Flexible support that fits our needs.\"",
    footer: "Client feedback",
  },
  {
    id: 4,
    image: "/sub pages/Testimonials/Rectangle 104.png",
    category: "Marketing & Creative — Perth",
    quote: "\"An organised process from start to finish.\"",
    footer: "Client feedback",
  },
];

export default function FeedbackSection() {
  const [activeTab, setActiveTab] = useState("All Feedback");

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 border-b border-gray-200 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Featured Testimonial */}
      <div className="bg-[#f4f7fb] rounded-3xl overflow-hidden flex flex-col md:flex-row mb-12">
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
          <Image
            src="/sub pages/Testimonials/Rectangle 99.png"
            alt="Client smiling"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-8 leading-snug">
            "The support brought greater structure to our operations and adapted as our priorities changed."
          </h3>
          <div className="w-8 h-px bg-gray-300 mb-8"></div>
          <p className="text-sm text-gray-700 font-medium">Client feedback</p>
          <p className="text-sm text-gray-700 font-medium mb-4">Professional Services — Sydney</p>
          <p className="text-xs text-gray-500">Published with permission</p>
        </div>
      </div>

      {/* Grid Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {gridTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={testimonial.image}
                alt={testimonial.category}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-blue-600 text-xs font-bold mb-3">{testimonial.category}</p>
              <h4 className="text-lg font-bold text-[#1a2332] mb-6 flex-grow">{testimonial.quote}</h4>
              <p className="text-xs text-gray-500">{testimonial.footer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Disclaimer */}
      <div className="text-center text-sm text-gray-500">
        Final testimonials are published only with client approval.
      </div>
    </section>
  );
}
