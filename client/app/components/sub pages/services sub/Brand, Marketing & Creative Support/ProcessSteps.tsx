import Image from "next/image";

export default function ProcessSteps() {
  return (
    <section className="w-full bg-white py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 01 */}
        <div className="flex flex-col">
          <span className="text-[#1150fb] text-[40px] font-semibold mb-2 block">01</span>
          <h3 className="font-bold text-[#091535] text-[18px] mb-1">Understand</h3>
          <p className="text-gray-600 text-[14px] mb-8">Audience, message, outcome.</p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 119.png"
              alt="Step 01"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Step 02 */}
        <div className="flex flex-col">
          <span className="text-[#1150fb] text-[40px] font-semibold mb-2 block">02</span>
          <h3 className="font-bold text-[#091535] text-[18px] mb-1">Understand</h3>
          <p className="text-gray-600 text-[14px] mb-8">Brand standards and direction.</p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border-[5px] border-[#2096f3]">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 120.png"
              alt="Step 02"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col">
          <span className="text-[#1150fb] text-[40px] font-semibold mb-2 block">03</span>
          <h3 className="font-bold text-[#091535] text-[18px] mb-1">Understand</h3>
          <p className="text-gray-600 text-[14px] mb-8">Prepare, review, refine.</p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 121.png"
              alt="Step 03"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Step 04 */}
        <div className="flex flex-col">
          <span className="text-[#1150fb] text-[40px] font-semibold mb-2 block">04</span>
          <h3 className="font-bold text-[#091535] text-[18px] mb-1">Understand</h3>
          <p className="text-gray-600 text-[14px] mb-8">Organise and publish consistently.</p>
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image
              src="/sub pages/Services/Brand, Marketing & Creative Support/Rectangle 122.png"
              alt="Step 04"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
