export default function ClearProcess() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-24 pb-32">
      <h2 className="text-2xl md:text-[32px] font-bold mb-20 text-[#091535] text-center">
        A Clear Process. Better Outcomes.
      </h2>
      
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {/* Row 1 */}
          <div className="flex flex-col relative">
            <div className="flex gap-4">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none">01</span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[15px] mb-1">Understand</h3>
                <p className="text-gray-500 text-[13px]">Find friction.</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 left-[85%] w-[45%] h-[2px] bg-[#a9c3ff]"></div>
          </div>

          <div className="flex flex-col relative">
            <div className="flex gap-4">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none">02</span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[15px] mb-1">Simplify</h3>
                <p className="text-gray-500 text-[13px]">Remove unnecessary steps.</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 left-[85%] w-[45%] h-[2px] bg-[#a9c3ff]"></div>
          </div>

          <div className="flex flex-col relative">
            <div className="flex gap-4">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none">03</span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[15px] mb-1">Design</h3>
                <p className="text-gray-500 text-[13px]">Build the future workflow.</p>
              </div>
            </div>
          </div>

          {/* Row 2 (Reverse visual order for flow: 06, 05, 04) */}
          <div className="flex flex-col relative">
            <div className="flex gap-4">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none">06</span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[15px] mb-1">Improve</h3>
                <p className="text-gray-500 text-[13px]">Refine over time.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative">
            <div className="flex gap-4">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none">05</span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[15px] mb-1">Test</h3>
                <p className="text-gray-500 text-[13px]">Check accuracy and exceptions.</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-[85%] w-[45%] h-[2px] bg-[#a9c3ff]"></div>
          </div>

          <div className="flex flex-col relative">
            <div className="flex gap-4">
              <span className="text-[#1150fb] text-[48px] font-medium leading-none">04</span>
              <div className="pt-1">
                <h3 className="font-bold text-[#091535] text-[15px] mb-1">Automate</h3>
                <p className="text-gray-500 text-[13px]">Add practical automation.</p>
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-[85%] w-[45%] h-[2px] bg-[#a9c3ff]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
