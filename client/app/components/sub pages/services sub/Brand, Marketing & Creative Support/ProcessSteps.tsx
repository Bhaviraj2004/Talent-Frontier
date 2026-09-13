import Image from "next/image";

export default function ProcessSteps() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 pb-20 sm:pb-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Step 01 */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div>
            <span className="text-[#1150fb] text-3xl sm:text-[40px] font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">01</span>
            <h3 className="font-bold text-[#091535] text-lg mb-1 group-hover:text-blue-600 transition-colors">Understand</h3>
            <p className="text-gray-600 text-xs sm:text-[14px] mb-6">Audience, message, outcome.</p>
          </div>
          <div className="relative w-full aspect-[272/263] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 119.png"
              alt="Step 01"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Step 02 */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div>
            <span className="text-[#1150fb] text-3xl sm:text-[40px] font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">02</span>
            <h3 className="font-bold text-[#091535] text-lg mb-1 group-hover:text-blue-600 transition-colors">Align</h3>
            <p className="text-gray-600 text-xs sm:text-[14px] mb-6">Brand standards and direction.</p>
          </div>
          <div className="relative w-full aspect-[272/263] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 120.png"
              alt="Step 02"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Step 03 */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div>
            <span className="text-[#1150fb] text-3xl sm:text-[40px] font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">03</span>
            <h3 className="font-bold text-[#091535] text-lg mb-1 group-hover:text-blue-600 transition-colors">Create</h3>
            <p className="text-gray-600 text-xs sm:text-[14px] mb-6">Prepare, review, refine.</p>
          </div>
          <div className="relative w-full aspect-[272/263] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 121.png"
              alt="Step 03"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Step 04 */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-blue-500 hover:bg-white hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div>
            <span className="text-[#1150fb] text-3xl sm:text-[40px] font-black mb-2 block group-hover:scale-110 origin-left transition-transform duration-300">04</span>
            <h3 className="font-bold text-[#091535] text-lg mb-1 group-hover:text-blue-600 transition-colors">Deliver</h3>
            <p className="text-gray-600 text-xs sm:text-[14px] mb-6">Organise and publish consistently.</p>
          </div>
          <div className="relative w-full aspect-[272/263] rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 122.png"
              alt="Step 04"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
