import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-20 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
      <div className="w-full md:w-[60%] flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold mb-8 sm:mb-12 text-[#091535]">
          How We Can Support You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-y-10 gap-x-4 sm:gap-x-6">
          <div>
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">01</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">Business Systems<br/>Support</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Keep your systems running smoothly.</p>
          </div>
          <div>
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">02</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">User & Access<br/>Coordination</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Manage access and user changes simply.</p>
          </div>
          <div>
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">03</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">Technology<br/>Setup</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Set up tools and systems the right way.</p>
          </div>
          <div>
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">04</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">CRM<br/>Support</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Keep your CRM accurate and useful.</p>
          </div>
          <div>
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">05</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">AI-Enabled<br/>Workflows</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Automate tasks and save time.</p>
          </div>
          <div>
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">06</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">Digital<br/>Collaboration</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Enable effective teamwork across tools.</p>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1">
            <span className="text-[#1150fb] text-2xl font-medium mb-3 block">07</span>
            <h3 className="font-bold text-gray-900 text-[15px] mb-2 pr-4 leading-tight">Technology<br/>Documentation</h3>
            <p className="text-gray-600 text-[13px] leading-relaxed">Clear guides and records your team can rely on.</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[40%] relative h-[260px] sm:h-[350px] md:h-auto min-h-[260px] sm:min-h-[350px] md:min-h-[500px]">
        <Image
          src="/sub pages/Services/Technology, IT & AI Support/Support Image.png"
          alt="Support Image"
          fill
          className="object-cover rounded-[24px] sm:rounded-[32px]"
        />
      </div>
    </section>
  );
}
