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

export default function FeaturedStory() {
  const [activeTab, setActiveTab] = useState("All Feedback");

  return (
    <section className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8">
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

      {/* Featured Story Card */}
      <div className="bg-[#f4f7fb] rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Image on Left */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-auto min-h-[400px]">
          <Image
            src="/sub pages/Testimonials/Client Success Stories/Rectangle 100.png"
            alt="Two women collaborating"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Content on Right */}
        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
            FEATURED SUCCESS STORY
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-3 leading-snug">
            Creating a More Organised <br /> Operating Structure
          </h3>
          <p className="text-blue-600 text-sm font-semibold mb-8">
            Professional Services Business
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#1a2332] mb-2">Challenge</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Growing workloads and inconsistent internal coordination.
              </p>
            </div>
            {/* Divider line for desktop */}
            <div className="hidden sm:block w-px bg-gray-300 mx-auto"></div>
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#1a2332] mb-2">Support Provided</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Administration, document organisation and workflow support.
              </p>
            </div>
            {/* Divider line for desktop */}
            <div className="hidden sm:block w-px bg-gray-300 mx-auto"></div>
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-[#1a2332] mb-2">Outcome</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Clearer responsibilities and more consistent day-to-day processes.
              </p>
            </div>
          </div>

          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline mb-8 flex items-center gap-1">
            Read the Full Story <span className="text-lg leading-none">→</span>
          </a>

          <p className="text-xs text-gray-500">
            Client details and outcomes are published only with approval.
          </p>
        </div>
      </div>
    </section>
  );
}
