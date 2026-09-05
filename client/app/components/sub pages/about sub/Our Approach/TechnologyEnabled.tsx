import Image from "next/image";

export default function TechnologyEnabled() {
  return (
    <section className="w-full max-w-[95%] mx-auto py-12 px-4 md:px-8 bg-[#f4f7fb] rounded-3xl mb-16 relative overflow-hidden">
      
      {/* Decorative Title Above */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-12 relative z-10">
        Our Client Support Approach
      </h2>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Image - Dashboard */}
        <div className="w-full md:w-[35%] relative min-h-[250px] bg-gray-50 border-r border-gray-100 p-6 flex items-center justify-center">
          <div className="relative w-full h-full min-h-[200px]">
            <Image
              src="/sub pages/About/Our Approach/ChatGPT Image Aug 31, 2026, 01_12_09 AM 1.png"
              alt="Dashboard UI"
              fill
              className="object-contain drop-shadow-md"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="w-full md:w-[35%] p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4 leading-tight">
            Technology-Enabled.<br />
            Client-Focused.
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Our systems and technology improve efficiency, visibility and coordination. 
            Our people provide the insight, communication and practical support that 
            help your business achieve better outcomes.
          </p>
        </div>

        {/* Right Image - Woman Smiling */}
        <div className="w-full md:w-[30%] relative min-h-[250px]">
          <Image
            src="/sub pages/About/Our Approach/Rectangle 13.png" // Re-using Rectangle 13 as a placeholder since it matches the context
            alt="Team member"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
