import React from 'react';

export default function ClearProcess() {
  const steps = [
    { num: "01", title: "Understand", desc: "Find friction." },
    { num: "02", title: "Simplify", desc: "Remove unnecessary steps." },
    { num: "03", title: "Design", desc: "Build the future workflow." },
    { num: "04", title: "Automate", desc: "Add practical automation." },
    { num: "05", title: "Test", desc: "Check accuracy and exceptions." },
    { num: "06", title: "Improve", desc: "Refine over time." },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-24 pb-32">
      <h2 className="text-2xl md:text-[32px] font-bold mb-16 text-[#091535] text-center">
        A Clear Process. Better Outcomes.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((step) => (
          <div 
            key={step.num}
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(17,80,251,0.12)] hover:-translate-y-1"
          >
            <div className="flex gap-5">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none transition-transform duration-300 group-hover:scale-110 origin-left">
                {step.num}
              </span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[18px] mb-2 transition-colors duration-300 group-hover:text-[#1150fb]">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
