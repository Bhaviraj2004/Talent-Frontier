import Image from "next/image";

export default function TechnologyEnabled() {
  return (
    <section className="w-full max-w-[95%] mx-auto py-12 px-4 md:px-8 bg-[#f4f7fb] rounded-3xl mb-16 relative overflow-hidden">
      
      {/* Title Above */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] text-center mb-12 relative z-10">
        Technology-Enabled Support
      </h2>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
        
        {/* Left Image - Dashboard */}
        <div className="w-full md:w-[35%] relative min-h-[250px] bg-gray-50 border-r border-gray-100 p-6 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full min-h-[200px]">
            <Image
              src="/sub pages/About/Our Approach/ChatGPT Image Aug 31, 2026, 01_12_09 AM 1.png"
              alt="Dashboard UI"
              fill
              className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="w-full md:w-[35%] p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-4 leading-tight group-hover:text-blue-600 transition-colors">
            Technology-Enabled.<br />
            Client-Focused.
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            Our systems and technology improve efficiency, visibility and coordination. 
            Our people provide the insight, communication and practical support that 
            help your business achieve better outcomes.
          </p>
        </div>

        {/* Right Image - Team member */}
        <div className="w-full md:w-[30%] relative aspect-[602/231] md:aspect-auto min-h-[180px] sm:min-h-[220px] md:min-h-[250px] overflow-hidden">
          <Image
            src="/sub pages/About/Our Approach/Rectangle 13.png"
            alt="Team member"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
}
